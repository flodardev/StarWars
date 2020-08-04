import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
// useQuery

// Components
import Person from "./Person";

const fetchPeople = async (key: String, params: Number) => {
	const res = await fetch(`https://swapi.dev/api/people/?page=${params}`);
	return res.json();
};

export default function People() {
	const [page, setPage] = useState(1);
	const { resolvedData, latestData, status } = usePaginatedQuery(
		["people", page],
		fetchPeople,
		{
			staleTime: 0,
			//cacheTime: 10,
			//onSuccess: () => console.log("Fetching data with no problem"),
		},
	);

	return (
		<div>
			<h1 className="text-4xl">People</h1>
			<button
				className="p-2 mx-2 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition duration-500"
				onClick={() => setPage((old) => Math.max(old - 1, 1))}
				disabled={page === 1}
			>
				Previous Page
			</button>
			<span>{page}</span>
			<button
				className="p-2 mx-2 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition duration-500"
				onClick={() =>
					setPage((old) => (!latestData || !latestData.next ? old : old + 1))
				}
				disabled={!latestData || !latestData.next}
			>
				Next Page
			</button>
			{status === "loading" && <div>Loading data</div>}
			{status === "success" &&
				resolvedData.results.map((person: any) => (
					<Person key={person.name} person={person} />
				))}
			{status === "error" && <div>Error fetching data</div>}
		</div>
	);
}
