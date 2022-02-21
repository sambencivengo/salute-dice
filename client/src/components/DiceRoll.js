import { Button, Text } from '@chakra-ui/react';

//button is clicked, that roles the dice
//take teh value of the dice and pass it to the finder function

const DiceRoll = ({ handleDiceRoll }) => {
	return (
		<>
			<Button onClick={handleDiceRoll}>Roll the dice!</Button>
		</>
	);
};

export default DiceRoll;
