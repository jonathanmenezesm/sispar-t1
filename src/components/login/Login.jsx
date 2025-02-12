import { useNavigate } from "react-router-dom";
import Capa from "../../assets/Tela Login/tela-login.png";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from './Login.module.scss';

function Login() {

const navigate = useNavigate();

const IrParaReembolso = () => {
  navigate('/reembolsos');
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
            <input type="email" name="email" id="email" placeholder=" Email"/>
          </div>
          
          <div>
            <input type="password" name="senha" id="senha" placeholder=" Senha"/>
          </div>
          
          <div>
            <a href="#" className={styles.EsqueciSenha}>Esqueci minha senha</a>
          </div>
          
          <div className={styles.divBotoes}>
          
          <button className={styles.botaoEntrar} onClick={IrParaReembolso}> 
            Entrar
          </button>
          
          <button className={styles.botaoCriarConta}> 
            Criar conta
          </button>

          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
