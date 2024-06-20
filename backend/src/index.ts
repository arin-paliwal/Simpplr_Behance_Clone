import express, {Request, Response} from 'express';
import "./database/index"
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from "./routes/authRoutes";

import morgan from 'morgan';
import cardRoutes from "./routes/cardRoutes";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({origin: "http://localhost:5173"}))
const port = process.env.PORT || 3000;
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello World',
    });
});
app.use(morgan('tiny'));
app.use('/api/auth', authRoutes);
app.use('/api/cards', cardRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
