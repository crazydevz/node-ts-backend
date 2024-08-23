import 'module-alias/register';
import express from 'express';
import cors from 'cors';

import errorHandler from '@middleware/functions/errorHandler';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/v1/users', require('@resources/user/user.router'));
app.use(errorHandler);

app.get('/', (req, res) => {
	res.send('Hello from server');
});

app.listen(PORT, () => console.log(`Server listening at port: ${PORT}`));
