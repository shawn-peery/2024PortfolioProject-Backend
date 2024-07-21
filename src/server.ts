import express, { Request, Response } from 'express';

const app = express();

const port = 5000;

app.get('/', (req: Request, res: Response) => {
	res.send("Hello, Typescript + Node.js + Express!")
})

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})

