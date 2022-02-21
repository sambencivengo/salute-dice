import { Text } from '@chakra-ui/react';

const ResultDisplay = ({ result }) => {
	return (
		<>
			<Text fontSize="4xl">{result.word}</Text>
			<Text fontSize="2xl">language: {result.language}</Text>
		</>
	);
};

export default ResultDisplay;
