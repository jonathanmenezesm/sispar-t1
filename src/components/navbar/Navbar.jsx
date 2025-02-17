import { useNavigate } from "react-router-dom";
import Historico from "../../assets/Header/bHistorico.png";
import Home from "../../assets/Header/bHome.png";
import Pesquisa from "../../assets/Header/bPesquisa.png";
import Reembolso from "../../assets/Header/bReembolso.png";
import Sair from "../../assets/Header/bSair.png";
import Perfil from "../../assets/Header/bAvatar.png";
import Fechar from "../../assets/Header/bFecharHeader.png";
import styles from './Navbar.module.scss';

function Navbar() {
  const navigate = useNavigate();
    return (
        <>
            <nav className={styles.navBarEstilo}>
                    <button className={styles.FecharEAbrir} onClick={ ()=>{navigate("/")} }>
                        <img src={Fechar} alt="Botão abrir e fechar" />
                    </button>
                   
                <section>
                   
                    <img src={Perfil} alt="imagem de Perfil" />
        
                    <button>
                        <img src={Home} alt="Botão Pagina inicial" />
                    </button>
        
                    <button>
                        <img src={Reembolso} alt="Solicitação de Reembolso" />
                    </button>
        
                    <button>
                        <img src={Pesquisa} alt="Botão de pesquisar" />
                    </button>
        
                    <button>
                        <img src={Historico} alt="Botão de historico" />
                    </button>
        
                </section>

                    <button className={styles.BotaoSair}>
                        <img src={Sair} alt="Botão de sair" />
                    </button>

            </nav>
        
        </>
    );
}
export default Navbar;