import { useState } from "react";
import Login from "./components/login";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<BrowserRouter>
			{!isLoggedIn ? (
				<Login setIsLoggedIn={setIsLoggedIn} />
			) : (
				<Routes>
					<Route path="/home" element={<Home />} />
				</Routes>
			)}
		</BrowserRouter>
	);
}

export default App;
