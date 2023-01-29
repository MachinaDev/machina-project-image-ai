import mongoose from 'mongoose';

const connectDB = (url) => {
	mongoose.set('strictQuery', true);
	mongoose
		.connect(url)
		.then(() => console.log('Application connecté à la base MongoDB'))
		.catch((err) => {
			console.error('Problème de connection à la base MongoDB');
			console.error(err);
		});
};

export default connectDB;
