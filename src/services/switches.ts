import { IBackendStatus, IResponse } from "../helpers/interfaces";

export const toggleMongo = async (): Promise<IResponse> => {
	try {
		const response = await fetch("/api/users/toggleMongo", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				action: "toggle",
			}),
		});
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		else return { success: true, message: data.message };
	} catch (error) {
		console.error(error);
		return { success: false, message: `Error ${error}` };
	}
};
export const hibernatePC = async (): Promise<IResponse> => {
	try {
		const response = await fetch("/api/users/hibernate", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				action: "toggle",
			}),
		});
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		else return { success: true, message: "All good" };
	} catch (error) {
		console.error(error);
		return { success: false, message: `Error ${error}` };
	}
};

export const getStatusOffBackend = async (): Promise<IBackendStatus> => {
	try {
		const response = await fetch("/api/users/status", {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		else return { success: true, mongoDB: data.mongo, mainPC: data.pc };
	} catch (error) {
		console.error(error);
		return { success: false, errorMessage: `${error}` };
	}
};
