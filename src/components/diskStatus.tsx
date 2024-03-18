import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/authContext";
import { getDiskStatus } from "../services/backendInteractions";
import { IResponse } from "../helpers/interfaces";

interface DiskStatus {
	filesystem: string;
	size: string;
	available: string;
	usePercentage: string;
}

const DiskStatus = () => {
	const { backendServiceProvider } = useContext(AuthContext);
	const [diskStatus, setDiskStatus] = useState<DiskStatus[]>([]);

	useEffect(() => {
		const getStatus = async () => {
			const response: IResponse = await backendServiceProvider(
				getDiskStatus
			);
			if (response.success) {
				setDiskStatus(response.data as DiskStatus[]);
			} else {
				console.log("error");
				console.log(response);
			}
		};
		getStatus();
	}, []);

	return (
		<div className="bg-black w-screen h-screen">
			<h1 className="text-green-500">DiskStatus</h1>
			<table className="text-green-500 border-collapse border border-green-500">
				<thead>
					<tr>
						<th className="border border-green-500 min-w-64">
							Filesystem
						</th>
						<th className="border border-green-500 min-w-64">Size</th>
						<th className="border border-green-500 min-w-64">
							Available
						</th>
						<th className="border border-green-500 min-w-64">
							Use Percentage
						</th>
						<th className="border border-green-500 min-w-64">
							Usage Bar
						</th>
					</tr>
				</thead>
				<tbody>
					{diskStatus.map((status, index) => (
						<tr key={index}>
							<td className="border border-green-500">
								{status.filesystem}
							</td>
							<td className="border border-green-500">{status.size}</td>
							<td className="border border-green-500">
								{status.available}
							</td>
							<td className="border border-green-500">
								{status.usePercentage}
							</td>
							<td className="border border-green-500">
								<div className="w-full h-4 rounded">
									<div
										className="h-4 bg-green-500 rounded"
										style={{ width: `${status.usePercentage}` }}
									/>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default DiskStatus;
