import React from "react";
import { useQuery } from "react-query";

// Components
import Person from "./Person";

export default function People() {
	const fetchPeople = async () => {
		const res = await fetch("https://swapi.dev/api/people/");

		return res.json();
	};

	const { data, status } = useQuery("planets", fetchPeople);
	console.log(data);

	return (
		<div>
			<h1>People</h1>
			{status === "loading" && <div>Loading data</div>}
			{status === "success" &&
				data.results.map((person: any) => (
					<Person key={person.name} person={person} />
				))}
			{status === "error" && <div>Error fetching data</div>}
		</div>
	);
}
