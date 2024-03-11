import { IResponse } from "../helpers/interfaces";

export const login = async (
	username: string,
	password: string
): Promise<IResponse> => {
	try {
		const response = await fetch("/api/users/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, password }),
		});
		const responseData = await response.json();
		if (!response.ok) {
			throw new Error(responseData.message);
		} else {
			return {
				success: true,
				message: responseData.message,
				data: responseData.data,
			};
		}
	} catch (error) {
		console.error(error);
		let errorMessage = "An error occurred";
		if (error instanceof Error) {
			errorMessage = error.message;
		}
		return { success: false, message: errorMessage, data: {} };
	}
};
export const validateToken = async (): Promise<IResponse> => {
	try {
		const response = await fetch("/api/users/validateToken", {
			method: "GET",
			credentials: "include",
			headers: { "Content-Type": "application/json" },
		});
		const responseData = await response.json();
		if (!response.ok) throw new Error(responseData.message);
		else
			return {
				success: true,
				message: responseData.message,
				data: responseData.data,
			};
	} catch (error) {
		console.error(error);
		let errorMessage = "An error occurred";
		if (error instanceof Error) {
			errorMessage = error.message;
		}
		return { success: false, message: errorMessage, data: {} };
	}
};
