import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Historico from "../../assets/Header/bHistorico.png";
import Home from "../../assets/Dashboard/bnHome.png";
import Pesquisa from "../../assets/Header/bPesquisa.png";
import Reembolso from "../../assets/Header/bReembolso.png";
import Sair from "../../assets/Header/bSair.png";
import Perfil from "../../assets/Header/bAvatar.png";
import Fechar from "../../assets/Header/bFecharHeader.png";
import styles from './Navbar.module.scss';

function NavBar() {
    //useNavigate se refere as rotas de navegação nas páginas.
  const navigate = useNavigate();
  //useState para trocar de um estado para outro. Neste caso usado para alterar estilo da navbar.
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/fechar a sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Alterna entre aberto e fechado
  };

  return (
    <>
      <nav className={`${styles.navBarEstilo} ${isOpen ? styles.aberto : styles.fechado}`}>
        {/* Foi trocado a classe fixa "styles.navBarEstilo" por uma template string onde adicionei classes condicionais. Representado pela estrutura (condição ? valor_se_verdadeiro : valor_se_falso;) */}
        <button className={styles.FecharEAbrir} onClick={toggleSidebar}>
          <img className={styles.imgPerfil} src={Fechar} alt="Botão de abrir e fechar menu de navegação" />
        </button>

        <section>
          <img src={Perfil} alt="Botão de Perfil" />

          <div className={styles.DivBotaoMenuAberto}>
              <button onClick={() => navigate("/reembolsos")}>
                <img src={Home} alt="Botão de Página Inicial" />
              </button>
                <p>Início</p>
          </div>
          

          <div className={styles.DivBotaoMenuAberto}>
              <button onClick={() => navigate('/solicitacao')}>
                <img src={Reembolso} alt="Botão de Solicitação de Reembolso" />
              </button>
              <p>Reembolsos</p>
          </div>

          <div className={styles.DivBotaoMenuAberto}>
              <button>
                <img src={Pesquisa} alt="Botão de pesquisar" />
              </button>
              <p>Análises</p>
          </div>

          <div className={styles.DivBotaoMenuAberto}>
              <button>
                <img src={Historico} alt="Botão de histórico" />
              </button>
                <p>Histórico</p>
          </div>

        </section>

        <button className={styles.BotaoSair} onClick={() => navigate("/")}>
          <img src={Sair} alt="Botão de sair" />
        </button>
      </nav>
    </>
  );
}

export default NavBar;
