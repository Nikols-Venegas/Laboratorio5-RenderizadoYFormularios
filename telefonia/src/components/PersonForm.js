export default function PersonForm(props) {
	return (
		<div>
			name: <input type="text" onChange={props.onchan} value={props.newName} />
			<br />
			<br />
			number: <input type="number" onChange={props.onchannum} value={props.newNumber} />
		</div>
	);
}
