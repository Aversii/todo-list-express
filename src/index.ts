import express, { Request, Response, Router } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/UserRoutes';
import taskRouter from './routes/TaskRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Configuração das rotas
app.use('/api', userRouter);
app.use('/api', taskRouter);

// Rota de teste
app.get('/', (req: Request, res: Response) => {
  res.json({ message: '🚀 Todo List API está rodando com sucesso!' });
});

// Função para listar todas as rotas
const listRoutes = (router: Router, basePath: string) => {
  const stack = (router as any).stack || [];
  stack.forEach((middleware: any) => {
    if (middleware.route) {
      const methods = Object.keys(middleware.route.methods)
        .map(method => method.toUpperCase())
        .join(', ');
      console.log(`🔹 ${methods} ${basePath}${middleware.route.path}`);
    }
  });
};

// Exibir rotas disponíveis ao iniciar
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}\n`);
  console.log('📌 Rotas disponíveis:');
  listRoutes(userRouter, `http://localhost:${PORT}/api`);
  listRoutes(taskRouter, `ahttp://localhost:${PORT}/api`);
});
