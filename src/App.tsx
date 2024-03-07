import { useState } from "react";
import Login from "./components/login";
import Home from "./components/home";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	return (
		<>
			{!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
			{isLoggedIn && <Home />}
		</>
	);
}

export default App;
