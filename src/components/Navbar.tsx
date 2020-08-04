import React from "react";

export default function Navbar(props: { setPage: Function }) {
	const { setPage } = props;

	return (
		<nav>
			<button
				onClick={() => {
					setPage("planets");
				}}
			>
				Planets
			</button>
			<button
				onClick={() => {
					setPage("people");
				}}
			>
				People
			</button>
		</nav>
	);
}
