import React, { useState } from "react";
import { ReactQueryDevtools } from "react-query-devtools";

// Components
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";

// Images
import starwarslogo from "./images/star-wars-4.svg";

function App() {
	const [page, setPage] = useState("planets");

	return (
		<>
			<div className="App">
				<div className="container mt-6">
					<img src={starwarslogo} alt="Star Wars Logo" />
					<h1 className="text-5xl">INFO</h1>
				</div>

				<Navbar setPage={setPage} />
				<div className="content">
					{page === "planets" ? <Planets /> : <People />}
				</div>
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
}

export default App;
