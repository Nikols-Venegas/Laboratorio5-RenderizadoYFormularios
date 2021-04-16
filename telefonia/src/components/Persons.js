export default function Persons(props) {
	return (
		<div>
			{props.busqueda.map((persona, index) => {
				return (
					<p key={persona.name}>
						{persona.name} - {persona.number}
					</p>
				);
			})}
		</div>
	);
}
