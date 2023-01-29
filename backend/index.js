import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const backURL = process.env.URL;
const backPORT = process.env.PORT;
const mongoURL = process.env.MONGODB_URL;

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
	res.status(200).json({
		message: 'Bonjour depuis Machina Image AI',
	});
});

const startServer = async () => {
	try {
		connectDB(mongoURL);
		app.listen(backPORT, () =>
			console.log(`Serveur Express disponible sur : ${backURL}:${backPORT}`)
		);
	} catch (error) {
		console.log(error);
	}
};

startServer();
