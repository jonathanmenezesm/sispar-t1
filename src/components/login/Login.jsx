import { useNavigate } from "react-router-dom";
import Capa from "../../assets/Tela Login/tela-login.png";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from './Login.module.scss';
import Api from "../../Services/Api.jsx";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();

  const IrParaReembolso = () => {
    navigate('/reembolsos');
  }

  const IrParaCadastrar = () => {
    navigate('/cadastrar');
  }

  //iniciando os estados para email e senha
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = async (e) => {
    e.preventDefault(); //previne o comportamento padrão do formulário de recarregar a página
    try {
      const resposta = await Api.post("/colaborador/login", {
        "email": email,
        "senha": senha
      }) //fazendo a requisição POST para a API com o email e senha do usuário

      console.log(resposta.data); //exibe a resposta da API no console
      alert("Login realizado com sucesso!"); //exibe um alerta de sucesso
      IrParaReembolso(); //chama a função para redirecionar o usuário para a página de reembolso

    } catch (error) {
      console.error("Erro ao fazer login:", error)
      alert("Erro ao fazer login. Verifique suas credenciais e tente novamente.")
    }
  }


  return (
    <main className={styles.mainLogin}>
      <section className={styles.sectionCapa}>
        <img src={Capa} id='icapa' alt="Imagem de um navio cargueiro visto de frente" />
      </section>

      <section className={styles.sectionLogin}>
        <img src={Logo} alt="Logo da Wilson sons" />

        <div className={styles.divTextos}>
          <h1>Boas vindas ao Novo Portal SISPAR</h1>
          <p>Sistema de Emissão de Boletos e Parcelamento</p>
        </div>

        <form action="">
          <div>
            <input type="email"
              name="email"
              id="email"
              placeholder=" Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <input type="password"
              name="senha"
              id="senha"
              placeholder=" Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div>
            <a href="#" className={styles.EsqueciSenha}>Esqueci minha senha</a>
          </div>

          <div className={styles.divBotoes}>

            <button
              className={styles.botaoEntrar}
              onClick={fazerLogin}
            >
              Entrar
            </button>

            <button
              className={styles.botaoCriarConta}
              onClick={IrParaCadastrar}
            >
              Criar conta
            </button>

          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
