import Header from './Header';
import Content from './Content';

export default function Course(props) {
	const {course} = props;
	const {id, name, parts} = course;
	return (
		<div>
			<Header key={id} nameCourse={name} />
			<Content parts={parts} />
		</div>
	);
}
