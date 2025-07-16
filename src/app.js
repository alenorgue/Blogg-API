import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/postRoutes.js';
import morgan from 'morgan';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import notFound from './middlewares/notFound.js';
import errosHandle from './middlewares/errosHandle.js';
import validatePost from './middlewares/validatePost.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', routes);

app.use(notFound);
app.use(errosHandle);
app.use(validatePost);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});