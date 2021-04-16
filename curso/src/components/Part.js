export default function Part(props) {
	return (
		<div>
			<h3>{props.namepart}</h3>
			<p style={{marginLeft: 50}}>Ejercicios: {props.exercisespart}</p>
		</div>
	);
}
