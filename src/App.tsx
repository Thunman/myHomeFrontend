import Login from "./components/login";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logs from "./components/logs";
import { AuthProvider } from "./hooks/authContext";
import DiskStatus from "./components/diskStatus";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/logs" element={<Logs />} />
					<Route path="/diskStatus" element={<DiskStatus />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}
export default App;
