import Part from './Part';

export default function Content(props) {
	const s = (cont, p) => cont + p.exercises;
	const total = props.parts.reduce(s, 0);
	return (
		<div>
			{props.parts.map((parte, index) => {
				return <Part key={parte.id} namepart={parte.name} exercisespart={parte.exercises} />;
			})}
			<p>Total: {total}</p>
		</div>
	);
}
