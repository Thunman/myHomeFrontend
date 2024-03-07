import React, { useState } from "react";
import { login } from "../services/auth";
import { ILoggedInState } from "../helpers/interfaces";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC<ILoggedInState> = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handleClick = async () => {
		console.log("CLICK");
		const response = await login(username, password);
		if (response.success) {
			props.setIsLoggedIn(true);
			navigate("/home");
		} else console.log(response.message);
	};

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="bg-black shadow-lg rounded-lg px-8 py-6 w-80 border-2 border-neutral-800">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleClick();
					}}
				>
					<div className="mb-4">
						<input
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Username"
							className="mt-1 w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:neutral-900 focus:border-transparent"
							type="text"
						/>
					</div>
					<div className="mb-4">
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
							className="mt-1 w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:neutral-900 focus:border-transparent"
							type="password"
						/>
					</div>
					<button
						type="submit"
						className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-neutral-900 border-2 border-neutral-800"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};
export default LoginForm;
