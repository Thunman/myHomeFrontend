import { useEffect, useState } from "react";
import { getLogs } from "../services/backendInteractions";

const Logs = () => {
	const [logs, setLogs] = useState("");
	useEffect(() => {
		const getData = async () => {
			setLogs((await getLogs()).jsonObj);
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
