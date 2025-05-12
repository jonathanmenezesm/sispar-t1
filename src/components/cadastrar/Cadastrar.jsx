import { useState } from 'react';
import styles from "./Cadastrar.module.scss";
import Logo from "../../assets/Tela Login/logo-ws.png";
import { useNavigate } from 'react-router-dom';
import Api from "../../Services/Api.jsx";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    cargo: '',
    salario: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const IrParaLogin = () => {
    navigate('/');
  };

  const cadastrarColaborador = async e => {
    e.preventDefault();
    try {
      await Api.post("/colaborador/cadastrar", formData); // Certifique-se de que a URL está correta
      alert('Colaborador registrado com sucesso!');
    } catch (error) {
      console.error('Erro ao registrar colaborador:', error);
      alert('Erro no registro. Verifique os dados.');
    }
  };

  return (
    <div className={styles.registerPage}>
      <form onSubmit={cadastrarColaborador} className={styles.registerForm}>
        <div className={styles.header}>
          <img src={Logo} alt="Logo da Wilson Sons" className={styles.logo} />
          <div className={styles.textos}>
            <h2>Cadastro de colaboradores</h2>
            <p>Obtenha acesso ao Portal SISPAR</p>
          </div>
        </div>

        <label>
          Nome
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </label>

        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Senha
          <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />
        </label>

        <label>
          Cargo
          <input type="text" name="cargo" value={formData.cargo} onChange={handleChange} required />
        </label>

        <label>
          Salário
          <input type="number" name="salario" value={formData.salario} onChange={handleChange} required />
        </label>

        <button type="submit">Registrar</button>

        <button
          type="button"
          className={styles.btnVoltar}
          onClick={IrParaLogin}
        >
          Voltar
        </button>
      </form>
    </div>
  );
}