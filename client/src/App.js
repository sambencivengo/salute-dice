import './App.css';
import NumberOfRolls from './components/NumberOfRolls';
import React, { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';

function App() {
	const [numRolls, setNumRolls] = useState(3);
	const [roll, setRoll] = useState(null);
	const data = [
		{
			id: 1,
			language: 'Italian',
			word: 'Salute',
		},
		{
			id: 2,
			language: 'Japanese',
			word: '乾杯 (Kanpai) ',
		},
		{
			id: 3,
			language: 'Irish',
			word: 'Sláinte (slawn-cha)',
		},
		{
			id: 4,
			language: 'German',
			word: 'Prost',
		},
		{
			id: 5,
			language: 'French',
			word: 'Santé',
		},
		{
			id: 6,
			language: 'Danish',
			word: 'Skål',
		},
		{
			id: 7,
			language: 'Dutch',
			word: 'Proost',
		},
		{
			id: 8,
			language: 'English',
			word: 'Cheers',
		},
		{
			id: 9,
			language: 'Greek',
			word: 'Στην υγειά σας (Stin Eye-ee-yass-ooh)',
		},
		{
			id: 10,
			language: 'Hawaiin',
			word: 'Kāmau',
		},
		{
			id: 11,
			language: 'Hebrew',
			word: "L'chaim",
		},
		{
			id: 12,
			language: 'Mandarin',
			word: '干杯 (gān bēi)',
		},
	];

	console.log(data.length);

	function rollDice(max) {
		const result = Math.floor(Math.random() * max);
		console.log(roll);
		setRoll(result);
	}

	return (
		<div className="App">
			<NumberOfRolls numRolls={numRolls} />
			<Button onClick={() => rollDice(data.length)}>
				Roll the dice!
			</Button>
			<Text>Result: {roll}</Text>
		</div>
	);
}

export default App;
