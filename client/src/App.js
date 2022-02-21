import './App.css';
import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import DiceRoll from './components/DiceRoll';
import ResultDisplay from './components/ResultDisplay.js';
import NumberOfRolls from './components/NumberOfRolls';

function App() {
	const [numRolls, setNumRolls] = useState(null);
	const [result, setResult] = useState(null);
	const [repeatRolls, setRepeatRolls] = useState(null);

	const data = [
		{
			id: 0,
			language: 'Italian',
			word: 'Salute',
		},
		{
			id: 1,
			language: 'Japanese',
			word: '乾杯 (Kanpai) ',
		},
		{
			id: 2,
			language: 'Irish',
			word: 'Sláinte (slawn-cha)',
		},
		{
			id: 3,
			language: 'German',
			word: 'Prost',
		},
		{
			id: 4,
			language: 'French',
			word: 'Santé',
		},
		{
			id: 5,
			language: 'Danish',
			word: 'Skål',
		},
		{
			id: 6,
			language: 'Dutch',
			word: 'Proost',
		},
		{
			id: 7,
			language: 'English',
			word: 'Cheers',
		},
		{
			id: 8,
			language: 'Greek',
			word: 'Στην υγειά σας (Stin Eye-ee-yass-ooh)',
		},
		{
			id: 9,
			language: 'Hawaiin',
			word: 'Kāmau',
		},
		{
			id: 10,
			language: 'Hebrew',
			word: "L'chaim",
		},
		{
			id: 11,
			language: 'Mandarin',
			word: '干杯 (gān bēi)',
		},
	];

	function rollDice(max) {
		return Math.floor(Math.random() * max);
	}

	useEffect(() => {
		const fetchDataOnLoad = async () => {
			try {
				const res = await fetch('/api/v1');
				const data = await res.json();
				const rolls = data.rolls;
				if (result) {
					const reps = rolls.filter(
						(doc) => doc.word === result.word
					);
					setRepeatRolls(reps.length);
				}
				setNumRolls(data.numberOfHits);

				return data;
			} catch (error) {
				console.log(error);
			}
		};

		fetchDataOnLoad();
	}, [result]);

	const queryDB = async () => {
		const num = rollDice(data.length);
		const wordObj = data.find((item) => item.id === num);
		const result = await postData('/api/v1', wordObj.word);
		if (result.success) {
			setResult(wordObj);
		}
	};

	const postData = async (url = '', payload = {}) => {
		try {
			const res = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ word: payload }),
			});
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			{result ? (
				<ResultDisplay result={result} />
			) : (
				<Text fontSize="4xl">Roll the dice!</Text>
			)}
			{repeatRolls && (
				<Text fontSize="2xl">
					{result.word} has been rolled {repeatRolls} times
				</Text>
			)}
			<DiceRoll handleDiceRoll={queryDB} />
			<NumberOfRolls numRolls={numRolls} />
		</div>
	);
}

export default App;
