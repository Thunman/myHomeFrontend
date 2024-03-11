import React, { useEffect, useState } from "react";
import {
	getStatusOffBackend,
	hibernatePC,
	logout,
	toggleMongo,
	wakePC,
} from "../services/switches";
import { useNavigate } from "react-router-dom";
import { ILoggedInState } from "../helpers/interfaces";
import { useCookies } from "react-cookie";

const Home: React.FC<ILoggedInState> = (props) => {
	const [mongoStatus, setMongoStatus] = useState(false);
	const [mainPCStatus, setMainPCStatus] = useState(false);
	const [_, setCookie] = useCookies(["loggedIn"]);
	const navigate = useNavigate();
	const handleSleepPC = async () => {
		const response = await hibernatePC();
		if (response.success) {
			alert(response.message);
			setMainPCStatus(false);
		} else alert(response.message);
	};
	const handleWakePC = async () => {
		const response = await wakePC();
		if (response.success) {
			alert(response.message);
			setMainPCStatus(true);
		} else alert(response.message);
	};
	const toggleDB = async () => {
		const response = await toggleMongo();
		if (response.success && response.message.includes("stopped")) {
			alert(response.message);
			setMongoStatus(false);
		} else if (response.success && response.message.includes("started")) {
			alert(response.message);
			setMongoStatus(true);
		} else {
			alert(response.message);
		}
	};

	useEffect(() => {
		const getStatus = async () => {
			const response = await getStatusOffBackend();
			if (response.success) {
				setMainPCStatus(
					response.mainPC !== undefined ? response.mainPC : false
				);
				setMongoStatus(
					response.mongoDB !== undefined ? response.mongoDB : false
				);
			} else alert(response.errorMessage);
		};
		getStatus();
	}, []);
	const handleLogout = async () => {
		const response = await logout();
		if (response.success) {
			props.setIsLoggedIn(false);
			setCookie("loggedIn", false);
			navigate("/");
		} else alert(response.message);
	};
	return (
		<div className=" bg-black w-screen h-screen flex justify-center items-center">
			<div className="h-3/4screen w-3/4screen flex flex-wrap gap-4 place-content-center">
				<div
					onClick={toggleDB}
					className={`hover:bg-neutral-300 flex items-center justify-center h-32 w-1/4 transition duration-200 rounded-lg ring-2 ring-white ${
						mongoStatus ? "bg-neutral-400" : "bg-neutral-600"
					}`}
				>
					{mongoStatus ? (
						<p className="text-white font-semibold">Mongo online</p>
					) : (
						<p className="text-white font-semibold">Mongo offline</p>
					)}
				</div>
				<div className="bg-neutral-600 hover:bg-neutral-300 flex items-center justify-center h-32 w-1/4 transition duration-200 rounded-lg ring-2 ring-white">
					<p className="text-white font-semibold">Emby</p>
				</div>
				{mainPCStatus ? (
					<div
						onClick={handleSleepPC}
						className={`hover:bg-neutral-300 flex items-center justify-center h-32 w-1/4 transition duration-200 rounded-lg ring-2 ring-white ${
							mainPCStatus ? "bg-neutral-400" : "bg-neutral-600"
						}`}
					>
						<p className="text-white font-semibold">Main PC online</p>
					</div>
				) : (
					<div
						onClick={handleWakePC}
						className={`hover:bg-neutral-300 flex items-center justify-center h-32 w-1/4 transition duration-200 rounded-lg ring-2 ring-white ${
							mainPCStatus ? "bg-neutral-400" : "bg-neutral-600"
						}`}
					>
						<p className="text-white font-semibold">Main PC offline</p>
					</div>
				)}
				<div
					onClick={() => navigate("/logs")}
					className="bg-neutral-600 hover:bg-neutral-300 flex items-center justify-center h-32 w-1/4 transition duration-200 rounded-lg ring-2 ring-white"
				>
					<p className="text-white font-semibold">Logs</p>
				</div>
				<div className="bg-neutral-600 hover:bg-neutral-300 flex items-center justify-center h-32 w-1/4 transition duration-200 rounded-lg ring-2 ring-white"></div>
				<div className="bg-neutral-600 hover:bg-neutral-300 flex items-center justify-center h-32 w-1/4 transition duration-200 rounded-lg ring-2 ring-white"></div>
				<div className="bg-neutral-600 hover:bg-neutral-300 flex items-center justify-center h-32 w-1/4 transition duration-200 rounded-lg ring-2 ring-white"></div>
				<div className="bg-neutral-600 hover:bg-neutral-300 flex items-center justify-center h-32 w-1/4 transition duration-200 rounded-lg ring-2 ring-white"></div>
				<div
					onClick={handleLogout}
					className="bg-neutral-600 hover:bg-neutral-300 flex items-center justify-center h-32 w-1/4 transition duration-200 rounded-lg ring-2 ring-white"
				>
					<p className="text-white font-semibold">Log out</p>
				</div>
			</div>
		</div>
	);
};
export default Home;
