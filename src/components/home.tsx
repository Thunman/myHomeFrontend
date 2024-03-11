import { useEffect, useState, useContext } from "react";
import {
	getStatusOffBackend,
	hibernatePC,
	logout,
	startMongo,
	stopMongo,
	wakePC,
} from "../services/switches";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/authContext";

const Home = () => {
	const [mongoStatus, setMongoStatus] = useState(false);
	const [mainPCStatus, setMainPCStatus] = useState(false);
	const { backendServiceProvider, setIsLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSleepPC = async () => {
		const response = await backendServiceProvider(hibernatePC);
		if (response.success) {
			alert(response.message);
			setMainPCStatus(false);
		} else alert(response.message);
	};
	const handleWakePC = async () => {
		const response = await backendServiceProvider(wakePC);
		if (response.success) {
			alert(response.message);
			setMainPCStatus(true);
		} else alert(response.message);
	};
	const startDB = async () => {
		const response = await backendServiceProvider(startMongo);
		if (response.success) {
			alert(response.message);
			setMongoStatus(true);
		} else {
			alert(response.message);
		}
	};
	const stopDB = async () => {
		const response = await backendServiceProvider(stopMongo);
		if (response.success) {
			alert(response.message);
			setMongoStatus(false);
		} else {
			alert(response.message);
		}
	};

	useEffect(() => {
		const getStatus = async () => {
			const response = await backendServiceProvider(getStatusOffBackend);
			if (response.success) {
				setMainPCStatus(response.data.mainPC);
				setMongoStatus(response.data.mongo);
			} else alert(response.message);
		};
		getStatus();
	}, [mongoStatus, mainPCStatus]);
	const handleLogout = async () => {
		const response = await backendServiceProvider(logout);
		if (response.success) setIsLoggedIn(false);
	};
	return (
		<div className=" bg-black w-screen h-screen flex justify-center items-center">
			<div className="h-3/4screen w-3/4screen flex flex-wrap gap-4 place-content-center">
				{mongoStatus ? (
					<div
						onClick={stopDB}
						className="hover:bg-neutral-300 flex items-center justify-center h-32 w-1/4 transition duration-200 rounded-lg ring-2 ring-white bg-neutral-400"
					>
						<p className="text-white font-semibold">Mongo online</p>
					</div>
				) : (
					<div
						onClick={startDB}
						className="hover:bg-neutral-300 flex items-center justify-center h-32 w-1/4 transition duration-200 rounded-lg ring-2 ring-white bg-neutral-600"
					>
						<p className="text-white font-semibold">Mongo offline</p>
					</div>
				)}
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
