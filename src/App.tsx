import { useContext } from "react";
import Login from "./components/login";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logs from "./components/logs";
import { AuthProvider, AuthContext } from "./hooks/authContext";

function App() {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<AuthProvider>
				{!isLoggedIn ? (
					<Login />
				) : (
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/logs" element={<Logs />} />
					</Routes>
				)}
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
