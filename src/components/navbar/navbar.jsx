import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Historico from "../../assets/Header/bHistorico.png";
import Home from "../../assets/Dashboard/bnHome.png";
import Pesquisa from "../../assets/Header/bPesquisa.png";
import Reembolso from "../../assets/Header/bReembolso.png";
import Sair from "../../assets/Header/bSair.png";
import Perfil from "../../assets/Header/linkedin-profile.png";
import Fechar from "../../assets/Header/bFecharHeader.png";
import styles from './Navbar.module.scss';

function NavBar() {
  //useNavigate se refere as rotas de navegação nas páginas.
  // -- função de navegação ---
  const navigate = useNavigate();

  const IrParaAnalises = () => {
    navigate('/analises');

  }
  // --- fim da função de navegação ---

  //useState para trocar de um estado para outro. Neste caso usado para alterar estilo da navbar.
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/fechar a sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Alterna entre aberto e fechado
  };

  return (
    <>
      <nav className={`${styles.navBarEstilo} ${isOpen ? styles.aberto : styles.fechado}`}>
        {/* Foi trocado a classe fixa "styles.navBarEstilo" por uma template string onde adicionei classes condicionais. Representado pela estrutura (condição ? valor_se_verdadeiro : valor_se_falso;) */}
        <div className={styles.botoesDeNavegacao}>

          <button className={styles.FecharEAbrir} onClick={toggleSidebar}>
            <img className={styles.imgPerfil} src={Fechar} alt="Botão de abrir e fechar menu de navegação" />
          </button>

            <div className={styles.avatarPerfil}>
              <img src={Perfil} alt="Imagem miniatura de Perfil" />
              <span>Jonathan Moura</span>
            </div>
          
          <section>
            <div className={styles.divBotaoNavegavel}>
              <button onClick={() => navigate("/reembolsos")}>
                <img src={Home} alt="Botão de Página Inicial" />
              </button>
              <span className={styles.textoBotao}>Início</span>
            </div>
            <div className={styles.divBotaoNavegavel}>
              <button onClick={() => navigate('/solicitacao')}>
                <img src={Reembolso} alt="Botão de Solicitação de Reembolso" />
              </button>
              <span className={styles.textoBotao}>Reembolsos</span>
            </div>
            <div className={styles.divBotaoNavegavel}>
              <button onClick={IrParaAnalises}>
                <img src={Pesquisa} alt="Botão de pesquisar" />
              </button>
              <span className={styles.textoBotao}>Análises</span>
            </div>
            <div className={styles.divBotaoNavegavel}>
              <button>
                <img src={Historico} alt="Botão de histórico" />
              </button>
              <span className={styles.textoBotao}>Histórico</span>
            </div>
          </section>
          <button className={styles.BotaoSair} onClick={() => navigate("/")}>
            <img src={Sair} alt="Botão de sair" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
