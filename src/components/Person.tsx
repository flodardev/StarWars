import React from "react";

export default function Person(props: { person: any }) {
	const { person } = props;

	return (
		<div className="card">
			<h3>{person.name}</h3>
			<p>Gender - {person.gender}</p>
			<p>Birth year - {person.birth_year}</p>
		</div>
	);
}
