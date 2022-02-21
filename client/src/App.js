import './App.css';
import NumberOfRolls from './components/NumberOfRolls';
import React, { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';

function App() {
	const [numRolls, setNumRolls] = useState(3);
	const [roll, setRoll] = useState(null);
	const data = [
		{
			language: 'Italian',
			word: 'Salute',
		},
		{
			language: 'Japanese',
			word: '乾杯 (Kanpai) ',
		},
		{
			language: 'Irish',
			word: 'Sláinte (slawn-cha)',
		},
		{
			language: 'German',
			word: 'Prost',
		},
		{
			language: 'French',
			word: 'Santé',
		},
		{
			language: 'Danish',
			word: 'Skål',
		},
		{
			language: 'Dutch',
			word: 'Proost',
		},
		{
			language: 'English',
			word: 'Cheers',
		},
		{
			language: 'Greek',
			word: 'Στην υγειά σας (Stin Eye-ee-yass-ooh)',
		},
		{
			language: 'Hawaiin',
			word: 'Kāmau',
		},
		{
			language: 'Hebrew',
			word: "L'chaim",
		},
		{
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
