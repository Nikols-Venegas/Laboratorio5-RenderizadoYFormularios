export default function Filter(props) {
	return (
		<div>
			filter shown with <input type="text" onChange={props.onchanshow} value={props.show} />
		</div>
	);
}
