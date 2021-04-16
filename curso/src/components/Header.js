export default function Header(props) {
	const {nameCourse} = props;
	return (
		<div>
			<h1 style={{color: 'blue', textAlign: 'center'}}>{nameCourse}</h1>
		</div>
	);
}
