const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const connectDB = require('./db/connect');
const port = process.env.PORT || 5000;
const db = process.env.MONGO_URI;
const rollsRouter = require('./routes/rollsRouter');

const corsOptions = {
	origin: 'http://localhost:3000' || process.env.CORS_ORIGIN,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/v1/', rollsRouter);

const start = async () => {
	try {
		await connectDB(db);
		console.log('database connected');
		app.listen(port, () => {
			console.log(`server is listening on port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
