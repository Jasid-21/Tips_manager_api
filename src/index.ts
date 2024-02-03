import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import PaymentRouter from './routes/Payment.routes';
import homeRouter from './routes/Home.routes';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;
app.use(cors({ origin: '*', methods: ['GET', 'POST'] }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/home', homeRouter);
app.use('/payment', PaymentRouter);

app.listen(PORT, () => {
  console.log("Listening in port: ", PORT);
});
