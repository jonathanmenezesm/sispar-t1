# SISPAR - Sistema de Reembolsos

O **SISPAR** é um sistema simples e funcional voltado para o controle de reembolsos. Criado como um desafio técnico, o projeto evoluiu para um sistema web completo, com front-end em React e back-end em Flask, oferecendo uma interface intuitiva e uma API organizada para gerenciamento das solicitações.

---

## 🚀 Tecnologias Utilizadas

### Front-end

- **React.js** com **Vite**
- **React Router DOM**
- **SCSS**
- **JavaScript (ES6+)**

### Back-end

- **Python 3.11+**
- **Flask**
- **Flask-CORS**
- **Flask-SQLAlchemy**
- **SQLite** (pode ser substituído por PostgreSQL futuramente)

> O código-fonte do back-end está disponível em repositório separado:  
> 🔗 [API-T1 - Back-end do SISPAR](https://github.com/jonathanmenezesm/API-T1)

---

## 📁 Estrutura do Projeto

```
sispar-t1/
├── front/
│   ├── public/
│   └── src/
│       ├── Services/
│       ├── assets/
│       └── components/
└── backend/  → Repositório separado: https://github.com/jonathanmenezesm/API-T1
    ├── controller/
    └── model/
```

---

## 🔧 Como Executar o Projeto

### Pré-requisitos

- Python 3.11+
- Node.js
- Git
- pip (Python)
- npm (Node.js)

---

### 1. Clonar os repositórios

```bash
git clone https://github.com/jonathanmenezesm/sispar-t1.git
git clone https://github.com/jonathanmenezesm/API-T1.git
```

---

### 2. Executar o Back-end (Flask)

```bash
cd API-T1
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows
pip install -r requirements.txt
python run.py
```

> O servidor será iniciado em `http://localhost:5000`

---

### 3. Executar o Front-end (React)

```bash
cd sispar-t1/front
npm install
npm run dev
```

> A aplicação estará disponível em `http://localhost:5173`

---

## ✅ Funcionalidades (em desenvolvimento)

- [x] Tela de login
- [x] Cadastro de solicitações de reembolso
- [x] Listagem de solicitações
- [ ] Autenticação e autorização com controle de acesso
- [ ] Filtros por data/status
- [ ] Dashboard administrativo

---

## 🤝 Contribuição

Contribuições são muito bem-vindas! Se quiser sugerir melhorias ou corrigir algo, sinta-se à vontade para abrir uma [issue](https://github.com/jonathanmenezesm/sispar-t1/issues) ou um pull request.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
