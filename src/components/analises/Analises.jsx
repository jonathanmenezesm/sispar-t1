import { useState } from 'react';
import Api from "../../Services/Api.jsx";
import { useNavigate } from 'react-router-dom';
import Navbar from "../navbar/navbar.jsx";
import styles from "./Analises.module.scss";
import Motivo from "../../assets/Solicitacao/motivo.png";
import Home from "../../assets/Header/bHome.png";
import Seta from "../../assets/Dashboard/Vector.png";

function VerificarReembolso() {
  const [numero, setNumero] = useState('');
  const [reembolsos, setReembolsos] = useState([]);

  // ---- Modal do motivo ----
  const [modalAberto, setModalAberto] = useState(false);
  const [motivoSelecionado, setMotivoSelecionado] = useState('');

  const abrirModalMotivo = (motivo) => {
    setMotivoSelecionado(motivo);
    setModalAberto(true);
  };

  const fecharModalMotivo = () => {
    setModalAberto(false);
    setMotivoSelecionado('');
  };
  // ---- FIM Modal do motivo ----

  // ---- função para buscar reembolso ----
  const buscarReembolso = async () => {
    if (!numero.trim()) {
      alert('Informe um número de prestação válido.');
      return;
    }

    try {
      const response = await Api.get(`/reembolso/refunds/${numero}`);
      setReembolsos(response.data);
    } catch (error) {
      alert('Erro ao buscar dados: ' + (error.response?.data?.mensagem || error.message));
      setReembolsos([]); // limpa a lista se houver erro
    }
  };
  // ---- função de navegação ----
  const navigate = useNavigate();

  const IrParaReembolso = () => {
    navigate('/reembolsos');
  }
  // ---- FIM função de navegação ----

  // Não é obrigatório criar uma função separada, mas facilita a reutilização e mantém o código organizado.
  // Se preferir, pode formatar a data diretamente no JSX assim:
  // <td>{new Date(item.data).toLocaleDateString('pt-BR')}</td>
  // Isso já retorna no formato DD/MM/AAAA.

  return (
    <div className={styles.containerMain}>
      <div className={styles.main}>
        <Navbar />
        <div className={styles.boxHeader}>
          <header>
            <div className={styles.HeaderObjetos}>
              <img src={Home} alt="" onClick={IrParaReembolso} style={{ cursor: "pointer"}}/>
              <img src={Seta} alt="" />
              <p onClick={IrParaReembolso} style={{ cursor: "pointer"}}>Reembolsos</p>
              <img src={Seta} alt="" />
              <p>Análise de Reembolsos</p>
            </div>
          </header>
        </div>
        <div className={styles.secaoConteudo}>
          <div className={styles.conteudo}>
              <h2>Análise de Reembolsos</h2>
              <p>Para buscar reembolsos, informe o número da prestação de contas.</p>
            <div className={styles.controles}>
              <p>Número de prestação de contas:</p>
              <input
                type="number"
                placeholder="INSIRA AQUI..."
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
              <div className={styles.containerBotoes}>
                <div>
                  <button className={styles.botaoBuscar} onClick={buscarReembolso}>Buscar</button>
                </div>
                <div>
                  <button className={styles.botaoVoltar} onClick={IrParaReembolso}>Voltar</button>
                </div>
              </div>
            </div>
            {reembolsos.length > 0 && (
              <div className={styles.tabelaResultados}>
                <table>
                  <thead>
                    <tr>
                      <th>Colaborador</th>
                      <th>Empresa</th>
                      <th>Nº Prest.</th>
                      <th>Data</th>
                      <th>Motivo</th>
                      <th>Tipo</th>
                      <th>Centro de Custo</th>
                      <th>Ord. Int.</th>
                      <th>Divisão</th>
                      <th>PEP</th>
                      <th>Moeda</th>
                      <th>Dist. Km</th>
                      <th>Val. Km</th>
                      <th>Val. Faturado</th>
                      <th>Despesa</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reembolsos.map((item) => (
                      <tr key={item.id}>
                        <td>{item.colaborador}</td>
                        <td>{item.empresa}</td>
                        <td>{item.num_prestacao}</td>
                        <td>{new Date(item.data).toLocaleDateString('pt-BR')}</td>
                        <td style={{ textAlign: "center" }}>
                          <img
                            src={Motivo}
                            alt="Ver motivo"
                            style={{ cursor: "pointer", width: 24, height: 24 }}
                            onClick={() => abrirModalMotivo(item.descricao)}
                          />
                        </td>
                        <td>{item.tipo_reembolso}</td>
                        <td>{item.centro_custo}</td>
                        <td>{item.ordem_interna}</td>
                        <td>{item.divisao}</td>
                        <td>{item.pep}</td>
                        <td>{item.moeda}</td>
                        <td>{item.distancia_km}</td>
                        <td>{item.valor_km}</td>
                        <td>{item.valor_faturado}</td>
                        <td>{item.despesa}</td>
                        <td>{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      {modalAberto && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalMotivo}>
            <h3>Motivo do Reembolso:</h3>
            <p>{motivoSelecionado}</p>
            <button className={styles.botaoFecharModal} onClick={fecharModalMotivo}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerificarReembolso;