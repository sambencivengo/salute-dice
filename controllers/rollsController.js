const Roll = require('../models/roll');

const getRolls = async (req, res) => {
	const rolls = await Roll.find({});
	res.status(200).json({
		success: true,
		numberOfHits: rolls.length,
		rolls: rolls,
	});
};

const createRoll = async (req, res) => {
	try {

		const roll = await Roll.create(req.body);
		res.status(202).json({ success: true, data: roll });
	} catch (error) {
		res.status(400).json({ error });
	}
};

module.exports = { getRolls, createRoll };
