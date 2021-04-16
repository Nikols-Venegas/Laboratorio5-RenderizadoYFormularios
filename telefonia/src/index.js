import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
	const [ persons, setPersons ] = useState([ {name: 'Arto Hellas', number: '953405266'} ]);
	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState('');
	const [ show, setShow ] = useState('');

	const clicadd = event => {
		event.preventDefault();

		const nuevaPersona = {
			name: newName,
			number: newNumber
		};

		let revisarDupli = persons.filter(persona => {
			return persona.name === newName;
		});

		if (revisarDupli.length > 0) {
			alert(`${nuevaPersona.name} ya existe `);
			setNewName('');
			setNewNumber('');
			return;
		}

		setPersons([ ...persons, nuevaPersona ]);

		setNewName('');
		setNewNumber('');
	};

	const onchan = event => {
		setNewName(event.target.value);
	};

	const onchannum = event => {
		setNewNumber(event.target.value);
	};

	let busqueda = persons;
	if (show.length > 0) {
		busqueda = persons.filter(persona => {
			return persona.name.includes(show);
		});
	}

	const onchanshow = event => {
		setShow(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter onchanshow={onchanshow} show={show} />
			<div>
				<h2>add a new</h2>
				<PersonForm onchan={onchan} newName={newName} onchannum={onchannum} newNumber={newNumber} />
			</div>
			<div>
				<button type="submit" onClick={clicadd}>
					add
				</button>
			</div>
			<h2>Numbers</h2>
			<Persons busqueda={busqueda} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
