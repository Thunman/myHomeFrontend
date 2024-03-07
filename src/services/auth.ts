import { IResponse } from "../helpers/interfaces";

export const login = async (
	username: string,
	password: string
): Promise<IResponse> => {
	const response = await fetch("/api/users/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username, password }),
	});
	if (!response.ok) return { success: false, message: "error" };
	else return { success: true, message: "Logged in" };
};
