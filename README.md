# SISPAR - Sistema de Reembolsos

O **SISPAR** é um sistema simples de controle de reembolsos, criado para facilitar o registro, consulta e acompanhamento de solicitações por parte de colaboradores e administradores. Este desafio foi proposto pela parceria da Vai na Web com a Wilson Sons através do programa Be Digital. São 7 meses de curso, abordando requisitos do que se espera de um  desenvolvedor full-stack. 

> Este projeto está em desenvolvimento e foi iniciado como um desafio de curto prazo. Com o tempo, está evoluindo para uma aplicação web completa com front-end em React e back-end em Flask.

---

## 🚀 Tecnologias Utilizadas

### Front-end

- **React.js** com **Vite**
- **React Router DOM**
- **SCSS**
- **JavaScript (ES6+)**

### Back-end

- **Python 3.11+**
- **Flask** (framework web leve e rápido)
- **Flask-CORS**
- **Flask-SQLAlchemy** (ORM para integração com o banco de dados)
- **SQLite** (padrão, mas podendo evoluir para PostgreSQL)

---

## 📁 Estrutura do Projeto

```
sispar-t1/
├── backend/
│   ├── app.py
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   └── database/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── public/
└── README.md
```

---

## 🔧 Como Executar o Projeto

### Pré-requisitos

- Python 3.11+
- Node.js
- Gerenciador de pacotes (pip para o back-end, npm para o front-end)

---

### 1. Clonar o repositório

```bash
git clone https://github.com/jonathanmenezesm/sispar-t1.git
cd sispar-t1
```

---

### 2. Back-end (Flask)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # ou venv\Scripts\activate no Windows
pip install -r requirements.txt
python app.py
```

> O servidor Flask será iniciado em `http://localhost:5000`.

---

### 3. Front-end (React)

```bash
cd frontend
npm install
npm run dev
```

> A aplicação React será servida em `http://localhost:5173`.

---

## ✅ Funcionalidades (parciais)

- Login com validação simples
- Cadastro e listagem de reembolsos
- Interface de usuário responsiva
- Integração entre front e back via API REST

---

## 📌 Observações

- O projeto ainda está em fase de estruturação e melhorias são esperadas.
- Sugestões, críticas e contribuições são muito bem-vindas!

