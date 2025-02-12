import styles from "./Reembolsos.module.scss";
import Home from "../../assets/Header/Home.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Analises from "../../assets/Dashboard/Analises.png";
import NumeroAnalises from "../../assets/Dashboard/NumeroAnalises.png";
import NumeroAprovados from "../../assets/Dashboard/NumeroAprovados.png";
import NumeroRejeitados from "../../assets/Dashboard/NumeroRejeitados.png";
import NumeroSolicitados from "../../assets/Dashboard/NumeroSolicitados.png";
import Sistema from "../../assets/Dashboard/SistemaAtualizado.png";
import SolicitarHistorico from "../../assets/Dashboard/SolicitarHistorico.png";
import SolicitarReembolso from "../../assets/Dashboard/Reembolso.png";

function Reembolsos() {
  return (
    <>
      <header>
        <img src={Home} alt="" />
        <img src={Seta} alt="" />
        <p>Reembolsos</p>
      </header>
    </>
  );
}
export default Reembolsos;