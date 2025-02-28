import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/UserRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Configuração das rotas
app.use('/api', userRouter);

// Rota de teste
app.get('/', (req: Request, res: Response) => {
  res.json({ message: '🚀 Todo List API está rodando com sucesso!' });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
