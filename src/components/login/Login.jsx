import Capa from "../../assets/Tela Login/tela-login.png";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from './Login.module.scss';

function Login() {
  return (
    <main className={styles['main-login']}>
      <section className={styles['section-capa']}>
        <img src={Capa} id='icapa' alt="Imagem de um navio cargueiro visto de frente" />
      </section>

      <section className={styles['section-login']}>
        <img src={Logo} alt="Logo da Wilson sons" />

        <div className={styles['div-textos']}>
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
            <a href="#" className={styles['a-esqueci-senha']}>Esqueci minha senha</a>
          </div>
          
          <div className={styles['div-botoes']}>
          
          <button className={styles['botao-entrar']}> 
            Entrar
          </button>
          
          <button className={styles['botao-criar-conta']}> 
            Criar conta
          </button>

          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
