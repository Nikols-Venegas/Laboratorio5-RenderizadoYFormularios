import React, {useState} from 'react';
import ReactDOM from 'react-dom';

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
			filter shown with <input type="text" onChange={onchanshow} value={show} />
			<div>
				<h2>add a new</h2>
				name: <input type="text" onChange={onchan} value={newName} />
				<br />
				<br />
				number: <input type="number" onChange={onchannum} value={newNumber} />
			</div>
			<div>
				<button type="submit" onClick={clicadd}>
					add
				</button>
			</div>
			<h2>Numbers</h2>
			{busqueda.map((persona, index) => {
				return (
					<p key={persona.name}>
						{persona.name} - {persona.number}
					</p>
				);
			})}
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
