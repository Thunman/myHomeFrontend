export const startMongo = async () => {
	return fetch("/api/users/startMongo", {
		method: "POST",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});
};

export const stopMongo = async () => {
	return fetch("/api/users/stopMongo", {
		method: "POST",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});
};

export const hibernatePC = async () => {
	return fetch("/api/users/hibernate", {
		method: "POST",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});
};

export const getStatusOffBackend = async () => {
	return fetch("api/users/getStatus", {
		method: "GET",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});
};

export const getLogs = async () => {
	return fetch("/api/users/getLogs", {
		method: "GET",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});
};

export const wakePC = async () => {
	return fetch("/api/users/wakePC", {
		method: "POST",
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});
};
