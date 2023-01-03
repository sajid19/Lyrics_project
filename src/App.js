import "./App.css";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lyrics from "./components/Lyrics/Lyrics";

function App() {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Details />} />
					<Route path="/lyrics/:id" element={<Lyrics />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
