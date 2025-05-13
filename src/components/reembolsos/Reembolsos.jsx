import { useNavigate } from "react-router-dom";
import styles from "./Reembolsos.module.scss";
import Home from "../../assets/Header/bHome.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Analises from "../../assets/Dashboard/Analises.png";
import NumeroAnalises from "../../assets/Dashboard/NumeroAnalises.png";
import NumeroAprovados from "../../assets/Dashboard/NumeroAprovados.png";
import NumeroRejeitados from "../../assets/Dashboard/NumeroRejeitados.png";
import NumeroSolicitados from "../../assets/Dashboard/NumeroSolicitados.png";
import Sistema from "../../assets/Dashboard/SistemaAtualizado.png";
import SolicitarHistorico from "../../assets/Dashboard/SolicitarHistorico.png";
import SolicitarReembolso from "../../assets/Dashboard/Reembolso.png";
// importanto o componente navBar
import Navbar from "../navbar/navbar.jsx";

function Reembolsos() {

  const navigate = useNavigate();
  const IrParaSolicitacao = () => {
    navigate('/solicitacao');

  }
  const IrParaAnalises = () => {
    navigate('/analises');

  }

  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.containerMain}>
        <div className={styles.boxHeader}>
          <header>
            <div className={styles.HeaderObjetos}>
              <img src={Home} alt="" />
              <img src={Seta} alt="" />
              <p>Reembolsos</p>
            </div>
          </header>
        </div>

        <main className={styles.mainReembolsos}>
          <section className={styles.centralizar}>
            <div className={styles.textoReembolso}>
              <h1>Sistema de Reembolso</h1>
              <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
            </div>
            <section className={styles.containerCards}>
              <article className={styles.CardReembolso} onClick={IrParaSolicitacao}>
                <img src={SolicitarReembolso} alt="icone para solicitação de reembolso" />
                <h3> Solicitar Reembolso </h3>
              </article>

              <article className={styles.CardAnalise} onClick={IrParaAnalises}>
                <img src={Analises} alt="icone para analises" />
                <h3> Verificar análises </h3>
              </article>

              <article className={styles.CardHistorico}>
                <img src={SolicitarHistorico} alt="Icone de historico" />
                <h3> Histórico </h3>
              </article>
            </section>

            <section className={styles.containerStatus}>
              <div>
                <img className={styles.img1} src={NumeroSolicitados} alt="" />
                <h4>1</h4>
                <p>Solicitados</p>
              </div>

              <div>
                <img className={styles.img2} src={NumeroAnalises} alt="" />
                <h4>2</h4>
                <p>Em análise</p>
              </div>

              <div>
                <img className={styles.img3} src={NumeroAprovados} alt="" />
                <h4>3</h4>
                <p>Aprovados</p>
              </div>

              <div>
                <img className={styles.img4} src={NumeroRejeitados} alt="" />
                <h4>4</h4>
                <p>Rejeitados</p>
              </div>
            </section>
            <section className={styles.containerSistema} >
              <img src={Sistema} alt="Icone de sistema atualizado" />
              <p>Sistema atualizado</p>

            </section>
          </section>


        </main>

      </div>
    </div>
  );
}
export default Reembolsos;