import express from 'express';

const app = express();

const port = 5000;

app.get('/', (req, res) => {
	res.contentType('text');

	res.send("Successfully received message!")

})

app.listen(port, () => {
})


export { app, port };
