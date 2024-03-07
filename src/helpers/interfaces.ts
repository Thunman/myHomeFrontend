export interface IResponse {
	success: boolean;
	message: string;
}

export interface ILoggedInState {
	setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export interface IBackendStatus {
	success: boolean;
	mongoDB?: boolean;
	mainPC?: boolean;
	errorMessage?: string;
}
