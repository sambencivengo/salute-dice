const mongoose = require('mongoose');

const rollschema = new mongoose.Schema({
	dateRolled: {
		type: Date,
		default: Date.now(),
	},
	word: {
		type: String,
		required: [true],
	},
});

module.exports = mongoose.model('roll', rollschema);
