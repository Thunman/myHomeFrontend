import { useState } from "react";
import Login from "./components/login";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logs from "./components/logs";
import { useCookies } from "react-cookie";

function App() {
	const [cookies] = useCookies(["loggedIn"]);
	const [isLoggedIn, setIsLoggedIn] = useState(cookies.loggedIn);

	return (
		<BrowserRouter>
			{!isLoggedIn ? (
				<Login setIsLoggedIn={setIsLoggedIn} />
			) : (
				<Routes>
					<Route
						path="/home"
						element={<Home setIsLoggedIn={setIsLoggedIn} />}
					/>
					<Route path="/logs" element={<Logs />} />
				</Routes>
			)}
		</BrowserRouter>
	);
}

export default App;
