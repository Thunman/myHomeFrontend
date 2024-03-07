import { IResponse } from "../helpers/interfaces";

export const login = async (
	username: string,
	password: string
): Promise<IResponse> => {
	try {
		const response = await fetch("/api/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});
		if (!response.ok) {
			console.log(response);
			return { success: false, message: "error" };
		} else {
			console.log(response);
			return { success: true, message: "Logged in" };
		}
	} catch (error) {
		console.error(error);
		return { success: false, message: `Error ${error}` };
	}
};
