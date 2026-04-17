# MONEY HUB 💸 Gestão de Despesas Pessoais

Uma aplicação completa para gestão de despesas pessoais, desenvolvida com React no frontend e Node.js/Express no backend. Permite acompanhar receitas, despesas, categorias e visualizar gráficos de gastos.

---

## 🚀 Funcionalidades

- **Dashboard**: Visualização do saldo atual, receitas e despesas totais, com gráficos interativos.
- **Adicionar Transações**: Formulário para adicionar novas receitas ou despesas, com seleção de categoria e data.
- **Histórico de Transações**: Lista detalhada de todas as transações, com filtros por categoria e intervalo de datas.
- **Configurações**: Personalização de preferências e tema da aplicação.
- **Contato**: Página de informações de contato.
- **API Backend**: Endpoints REST para gerenciar transações e categorias, com persistência em LowDB.

---

## 🆕 Última Alteração

De acordo com o feedback do professor quanto aos cards no dashboard, incluímos o hover e o ícone do olho para adicionar uma visual cue que aquele componente também é interativo.

---

## 💻 Tecnologias Utilizadas

### Frontend
- **React**: Biblioteca para construção da interface.
- **React Router DOM**: Roteamento de páginas.
- **TanStack React Query**: Gerenciamento de estado e requisições à API.
- **Recharts**: Biblioteca para gráficos.
- **React Icons**: Ícones para a interface.
- **Vite**: Ferramenta de build e desenvolvimento.
- **ESLint**: Linting do código.

### Backend
- **Node.js**: Ambiente de execução.
- **Express**: Framework para API REST.
- **LowDB**: Banco de dados JSON para persistência.
- **CORS**: Middleware para permitir requisições cross-origin.
- **UUID**: Geração de IDs únicos.
- **Nodemon**: Ferramenta para desenvolvimento com reinício automático.

---

## 📁 Estrutura do Projeto

```
money-hub/
├── public/                          # Arquivos estáticos
├── src/
│   ├── components/                  # Componentes React
│   │   ├── Card.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── DateRangePicker.jsx
│   │   ├── ExpenseChart.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Summary.jsx
│   │   ├── TransactionItem.jsx
│   │   ├── TransactionList.jsx
│   │   └── styles/                  # Estilos CSS modulares
│   ├── context/                     # Contextos React
│   │   ├── PreferencesContext.jsx
│   │   └── ThemeContext.jsx
│   ├── expense-api/                 # Backend da aplicação
│   │   ├── data/
│   │   │   ├── categories.js
│   │   │   ├── db.js
│   │   │   └── transactions.json
│   │   ├── routes/
│   │   │   ├── categories.js
│   │   │   └── transactions.js
│   │   ├── package.json
│   │   ├── README.md
│   │   └── server.js
│   ├── layouts/
│   │   └── MainLayout.jsx           # Layout principal
│   ├── pages/                       # Páginas da aplicação
│   │   ├── AddTransaction.jsx
│   │   ├── Contact.jsx
│   │   ├── Dashboard.jsx
│   │   ├── History.jsx
│   │   └── Settings.jsx
│   ├── api.js                       # Cliente para API
│   ├── App.jsx                      # Componente raiz
│   ├── App.module.css
│   ├── index.css
│   └── main.jsx                     # Ponto de entrada
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 🏃‍♂️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/money-hub.git
   cd money-hub
   ```

2. **Instale as dependências do frontend**:
   ```bash
   npm install
   ```

3. **Instale as dependências do backend**:
   ```bash
   cd src/expense-api
   npm install
   cd ../..
   ```

4. **Inicie o backend**:
   ```bash
   cd src/expense-api
   npm run dev
   ```
   O servidor estará rodando em `http://localhost:3001`.

5. **Inicie o frontend** (em outro terminal):
   ```bash
   npm run dev
   ```
   Abra [http://localhost:5173](http://localhost:5173) no navegador.

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento do frontend.
- `npm run build`: Constrói a aplicação para produção.
- `npm run lint`: Executa o linter.
- `npm run preview`: Visualiza a build de produção.

Para o backend:
- `npm start`: Inicia o servidor em modo produção.
- `npm run dev`: Inicia o servidor com Nodemon para desenvolvimento.

---

## 📊 API Endpoints

### Transações
- `GET /api/transactions`: Lista todas as transações.
- `GET /api/transactions/:id`: Obtém uma transação específica.
- `POST /api/transactions`: Cria uma nova transação.
- `PUT /api/transactions/:id`: Atualiza uma transação.
- `DELETE /api/transactions/:id`: Remove uma transação.

### Categorias
- `GET /api/categories`: Lista todas as categorias.
- `GET /api/categories/:slug`: Obtém uma categoria específica.
- `GET /api/categories/:slug/icon`: Obtém o ícone SVG de uma categoria.

---

## 📝 Licença

Este projeto é para fins educacionais.

---

*Construído com React · Projeto UpSkill*
*Alunas*
*Natália Carvalho de Pinho Joaquim nº 219*
*Rebeca Luiza Soares Cerqueira nº 224* 
