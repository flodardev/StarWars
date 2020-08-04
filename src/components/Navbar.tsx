import React from "react";

export default function Navbar(props: { setPage: Function }) {
	const { setPage } = props;

	return (
		<nav>
			<button
				className="p-2 m-2 hover:bg-white hover:text-black transition duration-500"
				onClick={() => {
					setPage("planets");
				}}
			>
				Planets
			</button>
			<button
				className="p-2 m-2 hover:bg-white hover:text-black transition duration-500"
				onClick={() => {
					setPage("people");
				}}
			>
				People
			</button>
		</nav>
	);
}
