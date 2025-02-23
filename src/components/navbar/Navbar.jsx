import { useNavigate } from "react-router-dom";
import Historico from "../../assets/Header/bHistorico.png";
import Home from "../../assets/Dashboard/bnHome.png";
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
                        <img src={Fechar} alt="imagem do Botão de abrir e fechar menun de navegação" />
                    </button>
                   
                <section>
                   
                    <img src={Perfil} alt="imagem do botão de Perfil" />
        
                    <button onClick={ ()=>{navigate("/reembolsos")}}>
                        <img src={Home} alt="imagem do botão de Pagina inicial" />
                    </button>
        
                    <button onClick={ ()=> {navigate('/solicitacao')}}>
                        <img src={Reembolso} alt="imagem do botão de Solicitação de Reembolso" />
                    </button>
        
                    <button>
                        <img src={Pesquisa} alt="imagem do botão de pesquisar" />
                    </button>
        
                    <button>
                        <img src={Historico} alt="imagem do botão de historico" />
                    </button>
        
                </section>

                    <button className={styles.BotaoSair} onClick={ ()=>{navigate("/")}}>
                        <img src={Sair} alt="imagem do botão de sair" />
                    </button>

            </nav>
        
        </>
    );
}
export default Navbar;