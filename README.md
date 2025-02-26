# Todo List Express

Um backend para uma lista de tarefas utilizando Express e TypeScript.

## Tecnologias Utilizadas

- [x] Express
- [x] TypeScript
- [x] JWT para autenticação
- [x] PostgreSQL
- [ ] ORM (a definir: Prisma, TypeORM, Sequelize, etc.)
- [x] Bcrypt para hash e comparação de senhas

## Roteiro de Desenvolvimento (MVC)

### 1. Configuração Inicial
- [x] Inicializar o projeto com `npm init` ou `yarn init` 
- [x] Configurar o TypeScript com `npx tsc --init` (`tsconfig.json`)
- [x] Instalar dependências principais: `express`, `dotenv`, `cors`
- [x] Instalar dependências de desenvolvimento: `typescript`, `nodemon`, `ts-node`

### 2. Estrutura do Projeto
- [ ] Criar estrutura de pastas:
  - `src/`
    - `controllers/`
    - `models/`
    - `routes/`
    - `services/`
    - `middlewares/`
    - `config/`
    - `utils/`
    - `index.ts`

### 3. Configuração do Servidor
- [x] Criar o servidor Express em `index.ts`
- [x] Configurar middleware de JSON, CORS e dotenv
- [ ] Definir conexão com banco de dados PostgreSQL

### 4. Modelagem e Banco de Dados
- [ ] Escolher ORM (Prisma, TypeORM, Sequelize)
- [ ] Criar entidades e migrações:
  - [ ] Usuário (`id`, `nome`, `email`, `senha`)
  - [ ] Tarefa (`id`, `titulo`, `descricao`, `status`, `usuario_id` como FK)
- [ ] Configurar relações entre tabelas

### 5. Autenticação e Segurança
- [ ] Criar middleware para autenticação JWT
- [ ] Criar serviço de hash e comparação de senhas com bcrypt
- [ ] Implementar rotas de login e registro

### 6. Implementação das Funcionalidades
#### Usuários
- [ ] Criar controlador de usuários
- [ ] Criar rota para cadastro e login
- [ ] Implementar proteção de rotas com JWT

#### Tarefas
- [ ] Criar controlador de tarefas
- [ ] Criar rotas para CRUD de tarefas
- [ ] Implementar validação e regras de negócio
- [ ] Permitir apenas que o usuário dono da tarefa possa editá-la ou excluí-la

### 7. Testes e Documentação
- [ ] Adicionar testes unitários e de integração
- [ ] Configurar Swagger para documentação da API

### 8. Deploy
- [ ] Configurar ambiente de produção
- [ ] Escolher provedor de hospedagem (Heroku, Railway, Render, etc.)
- [ ] Configurar variáveis de ambiente e banco de dados em produção
- [ ] Testar e validar a API em produção

---

Marque as tarefas conforme forem sendo concluídas para acompanhar a evolução do projeto!

