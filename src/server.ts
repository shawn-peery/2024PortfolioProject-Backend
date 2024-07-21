import express from 'express';
import { resolve } from 'path';

const app = express();

const port = 5000;

app.get('/', (req, res) => {
	res.contentType('text');
	res.send("Successfully received message!")
})

const startServer = async () => {
	return new Promise<void>((resolve) => {
		app.listen(port, () => {
			console.log(`Server is running on port ${port}`)
			resolve();
		})
	})
}

export { app, port, startServer }
