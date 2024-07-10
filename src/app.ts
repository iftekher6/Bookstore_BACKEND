import express, {Request, Response} from 'express';
import { authorRouter } from './routes/authorRoutes';
import { bookRouter } from './routes/bookRoutes';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.get('/', (req : Request,res :Response)=> {
    res.send('Homes')
})
app.use('/books', bookRouter);
app.use('/authors', authorRouter);

app.use(errorHandler)



export default app;