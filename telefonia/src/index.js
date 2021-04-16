import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const [ persons, setPersons ] = useState([ {name: 'Arto Hellas'} ]);
	const [ newName, setNewName ] = useState('');

	const clicadd = event => {
		event.preventDefault();

		const nuevaPersona = {
			name: newName
		};

		let revisarDupli = persons.filter(persona => {
			return persona.name === newName;
		});

		if (revisarDupli.length > 0) {
			alert(`${nuevaPersona.name} ya existe `);
			setNewName('');
			return;
		}

		setPersons([ ...persons, nuevaPersona ]);

		setNewName('');
	};

	const onchan = event => {
		setNewName(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				name: <input type="text" onChange={onchan} value={newName} />
			</div>
			<div>
				<button type="submit" onClick={clicadd}>
					add
				</button>
			</div>
			<h2>Numbers</h2>
			{persons.map((person, index) => {
				return <p key={person.name}>{person.name}</p>;
			})}
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
