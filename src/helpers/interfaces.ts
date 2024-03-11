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
	isValid: boolean;
	setIsValid: (value: boolean) => void;
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
	(username: string, password: string): Promise<IResponse>;
}
export interface IBackendInteraction {
	(): Promise<IResponse>;
}
