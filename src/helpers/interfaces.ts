import React from "react";

export interface IResponse {
	success: boolean;
	message: string;
	data: {
		[key: string]: any;
	};
}

export interface IAuthProvider {
	children: React.ReactNode;
}

export interface IAuthContext {
	isLoggedIn: boolean;
	setIsLoggedIn: (value: boolean) => void;
	backendServiceProvider: (func: IBackendInteraction) => Promise<IResponse>;
	loginServiceProvider: (
		func: ILoginFunction,
		username: string,
		password: string
	) => Promise<IResponse>;
}
export interface ILoginFunction {
	(username: string, password: string): Promise<Response>;
}
export interface IBackendInteraction {
	(): Promise<Response>;
}
