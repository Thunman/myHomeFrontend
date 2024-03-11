import React, { createContext, useState, useEffect } from "react";
import { validateToken } from "../services/auth";
import {
	IAuthContext,
	IAuthProvider,
	IBackendInteraction,
	ILoginFunction,
	IResponse,
} from "../helpers/interfaces";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const AuthContext = createContext<IAuthContext>({
	isValid: false,
	setIsValid: () => {},
	isLoggedIn: false,
	setIsLoggedIn: () => {},
	backendServiceProvider: async (_: IBackendInteraction) => {
		return { success: false, message: "", data: {} };
	},
	loginServiceProvider: async (_: ILoginFunction, __: string, ___: string) => {
		return { success: false, message: "", data: {} };
	},
});

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
	const [cookies] = useCookies(["loggedIn"]);
	const [isValid, setIsValid] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(cookies.loggedIn);
	const navigate = useNavigate();

	useEffect(() => {
		const checkToken = async () => {
			const response = await validateToken();
			setIsValid(response.success);
		};

		checkToken();
	}, []);

	useEffect(() => {
		if (!isValid) {
			navigate("/");
			setIsLoggedIn(false);
		}
	}, [isValid, navigate]);

	const loginServiceProvider = async (
		func: ILoginFunction,
		username: string,
		password: string
	): Promise<IResponse> => {
		const response = await func(username, password);
		if (response.success) {
			setIsLoggedIn(true);
			setIsValid(true);
		}
		return response;
	};

	const backendServiceProvider = async (
		func: IBackendInteraction
	): Promise<IResponse> => {
		return await func();
	};
	return (
		<AuthContext.Provider
			value={{
				isValid,
				setIsValid,
				isLoggedIn,
				setIsLoggedIn,
				loginServiceProvider,
				backendServiceProvider,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
