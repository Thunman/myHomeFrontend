import { useEffect, useState, useContext } from "react";
import { getLogs } from "../services/backendInteractions";
import { AuthContext } from "../hooks/authContext";
import { IResponse } from "../helpers/interfaces";
import { useNavigate } from "react-router-dom";

const Logs = () => {
	const navigate = useNavigate();
	const { backendServiceProvider } = useContext(AuthContext);
	const [logs, setLogs] = useState("");
	const { isLoggedIn } = useContext(AuthContext);
	useEffect(() => {
		if (!isLoggedIn) navigate("/");
	}, [isLoggedIn]);
	useEffect(() => {
		const getData = async () => {
			const response: IResponse = await backendServiceProvider(getLogs);
			setLogs(response.data.logs);
		};
		getData();
	}, []);
	return (
		<div>
			<pre className="w-screen h-screen overflow-y-scroll whitespace-pre-wrap bg-black text-green-400 p-4 font-mono">
				{logs}
			</pre>
		</div>
	);
};
export default Logs;
