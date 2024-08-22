import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello from server');
});

app.listen(PORT, () => console.log(`Server listening at PORT: ${PORT}`));
