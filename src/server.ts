import express from 'express';
import cors from 'cors';
import routes from './routes';
const port = 3333;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/v1', routes);

const Reset = '\x1b[0m';
const FgGreen = '\x1b[32m';

app.listen(port, () => {
  console.log(`${FgGreen}Server listening at port ${port}`, Reset);
});
