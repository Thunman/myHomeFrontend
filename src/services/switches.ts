import { IResponse } from "../helpers/interfaces";

export const startMongo = async (): Promise<IResponse> => {
	try {
		const response = await fetch("/api/users/startMongo", {
			method: "POST",
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
export const stopMongo = async (): Promise<IResponse> => {
	try {
		const response = await fetch("/api/users/stopMongo", {
			method: "POST",
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
export const hibernatePC = async (): Promise<IResponse> => {
	try {
		const response = await fetch("/api/users/hibernate", {
			method: "POST",
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

export const getStatusOffBackend = async (): Promise<IResponse> => {
	try {
		const response = await fetch("api/users/getStatus", {
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

export const getLogs = async (): Promise<IResponse> => {
	try {
		const response = await fetch("/api/users/getLogs", {
			method: "GET",
			credentials: "include",
			headers: { "Content-Type": "application/json" },
		});
		const responseData = await response.json();
		if (!response.ok) throw new Error(responseData.message);
		else {
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

export const wakePC = async (): Promise<IResponse> => {
	try {
		const response = await fetch("/api/users/wakePC", {
			method: "POST",
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
export const logout = async (): Promise<IResponse> => {
	try {
		const response = await fetch("/api/users/logout", {
			method: "POST",
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
