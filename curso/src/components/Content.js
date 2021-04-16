import Part from './Part';

export default function Content(props) {
	return (
		<div>
			{props.parts.map((parte, index) => {
				return <Part key={parte.id} namepart={parte.name} exercisespart={parte.exercises} />;
			})}
		</div>
	);
}
