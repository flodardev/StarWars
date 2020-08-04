import React from "react";
import { useQuery } from "react-query";

// Components
import Planet from "./Planet";

export default function Planets() {
	const fetchPlanets = async () => {
		const res = await fetch("https://swapi.dev/api/planets/");

		return res.json();
	};

	const { data, status } = useQuery("planets", fetchPlanets, {
		staleTime: 0,
		//cacheTime: 10,
		//onSuccess: () => console.log("Fetching data with no problem"),
	});
	console.log(data);

	return (
		<div>
			<h1>Planets</h1>
			{status === "loading" && <div>Loading data</div>}
			{status === "success" &&
				data.results.map((planet: any) => (
					<Planet key={planet.name} planet={planet} />
				))}
			{status === "error" && <div>Error fetching data</div>}
		</div>
	);
}
