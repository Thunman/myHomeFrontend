import React, { useState, useEffect } from "react";
import LoginForm from "./loginForm";
import { ILoggedInState } from "../helpers/interfaces";

const randomSymbols = () => {
	const symbols =
		"1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
	let randomString = "";
	for (let i = 0; i < 1500; i++) {
		const randomLetter = symbols[Math.floor(Math.random() * symbols.length)];
		randomString += randomLetter;
	}
	return randomString;
};

const Login: React.FC<ILoggedInState> = (props) => {
	const [position, setPosition] = useState({ left: 0, top: 0 });
	const [cryptString, setCryptString] = useState("");
	useEffect(() => {
		setCryptString(randomSymbols);
	}, [position]);

	const updatePosition = (event: MouseEvent) => {
		setPosition({ left: event.clientX, top: event.clientY });
	};

	useEffect(() => {
		window.addEventListener("mousemove", updatePosition);
		return () => window.removeEventListener("mousemove", updatePosition);
	}, []);

	return (
		<>
			<div className="w-screen h-screen bg-black relative overflow-hidden">
				<div
					className="absolute w-48 h-48 rounded-full pointer-events-none overflow-hidden opacity-50 shadow-glow"
					style={{
						left: `${position.left}px`,
						top: `${position.top}px`,
						transform: "translate(-50%, -50%)",
					}}
				>
					<p className="break-all text-green-800">{cryptString}</p>
				</div>
			</div>
			<div className="absolute inset-0 flex items-center justify-center z-10">
				<LoginForm setIsLoggedIn={props.setIsLoggedIn} />
			</div>
		</>
	);
};

export default Login;
