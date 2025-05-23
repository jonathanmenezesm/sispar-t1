import NavBar from "../navbar/navbar.jsx";
import styles from "./Solicitacao.module.scss";
import Home from "../../assets/Header/bHome.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Lixeira from "../../assets/Solicitacao/lixeira.png";
import Motivo from "../../assets/Solicitacao/motivo.png";
import Salvar from "../../assets/Solicitacao/+.png";
import Deletar from "../../assets/Solicitacao/deletar.png";
import Check from "../../assets/Solicitacao/check.png";
import Delete from "../../assets/Solicitacao/x.png";
import { useState, useEffect } from "react";
import Api from "../../Services/Api.jsx"; // Importando a API para enviar os dados para o banco de dados
import { useNavigate } from 'react-router-dom';


function Solicitacao() {
  const [colaborador, setColaborador] = useState(""); // Estado para armazenar o nome do colaborador
  const [empresa, setEmpresa] = useState(""); // Estado para armazenar a empresa
  const [prestacaoContas, setPrestacaoContas] = useState(""); // Estado para armazenar o número da prestação de contas
  const [descricaoMotivo, setDescricaoMotivo] = useState(""); // Estado para armazenar a descrição do motivo do reembolso
  const [data, setData] = useState(""); // Estado para armazenar a data do reembolso
  const [tipoDespesa, setTipoDespesa] = useState(""); // Estado para armazenar o tipo de despesa
  const [centroCusto, setCentroCusto] = useState(""); // Estado para armazenar o centro de custo
  const [ordemInterna, setOrdemInterna] = useState(""); // Estado para armazenar a ordem interna
  const [divisao, setDivisao] = useState(""); // Estado para armazenar a divisão
  const [pep, setPep] = useState(""); // Estado para armazenar o PEP
  const [moeda, setMoeda] = useState(""); // Estado para armazenar a moeda
  const [distancia, setDistancia] = useState(""); // Estado para armazenar a distância em KM
  const [valorKm, setValorKm] = useState(""); // Estado para armazenar o valor por KM
  const [valorFaturado, setValorFaturado] = useState(""); // Estado para armazenar o valor faturado
  const [despesa, setDespesa] = useState(""); // Estado para armazenar a despesa

  const [dadosReembolso, setDadosReembolso] = useState([]); // Estado para armazenar os dados do reembolso


  // ---- função de navegação ----
  const navigate = useNavigate();

  const IrParaReembolso = () => {
    navigate('/reembolsos');
  }

  const IrParaAnalises = () => {
    navigate('/analises');

  }
  // ---- FIM função de navegação ----
  // MODAL QUE ABRE A DESCRIÇÃO DO MOTIVO
  const [modalMotivoAberto, setModalMotivoAberto] = useState(false);
  const [motivoSelecionado, setMotivoSelecionado] = useState('');
  // FIM DO MODAL QUE ABRE A DESCRIÇÃO DO MOTIVO

  //FUNÇÃO PARA ADICIONAR OS DADOS DO FORMULÁRIO NO ESTADO 'dadosReembolso'

  const handleSubmit = () => {
    const novoReembolso = {
      colaborador,
      empresa,
      prestacaoContas,
      descricaoMotivo,
      data,
      tipoDespesa,
      centroCusto,
      ordemInterna,
      divisao,
      pep,
      moeda,
      distancia,
      valorKm,
      valorFaturado,
      despesa,
    };
    setDadosReembolso(dadosReembolso.concat(novoReembolso)); // Adiciona o novo reembolso ao estado
    limparCampos(); // Limpa os campos do formulário após o envio

  };

  //FUNÇÃO PARA LIMPAR OS CAMPOS DO FORMULÁRIO (INPUTS)

  const limparCampos = () => {
    setColaborador(""),
      setEmpresa(""),
      setPrestacaoContas(""),
      setDescricaoMotivo(""),
      setData(""),
      setTipoDespesa(""),
      setCentroCusto(""),
      setOrdemInterna(""),
      setDivisao(""),
      setPep(""),
      setMoeda(""),
      setDistancia(""),
      setValorKm(""),
      setValorFaturado(""),
      setDespesa("")
  }


  //CRIAR UMA FUNÇÃO PARA ENVIAR OS DADOS PARA O BANCO DE DADOS
  const [foiEnviado, setFoiEnviado] = useState(false); //Este estado serve para saber se o formulário foi enviado ou não.
  // fim da função para enviar os dados para o banco de dados

  //------------- FUNÇÃO EnviarParaAnalise ----------------
  const enviarParaAnalise = async () => {
    const colaboradorId = localStorage.getItem("colaboradorId");

    // Adiciona o ID do colaborador a cada item
    const dadosComId = dadosReembolso.map(item => ({
      ...item,
      colaborador_id: colaboradorId,
    }));

    try {
      const response = await Api.post("/reembolso/refunds/new", dadosComId);
      alert("Reembolso solicitado com sucesso!");
      setFoiEnviado(true);
    } catch (error) {
      console.error("Erro ao enviar reembolso", error);
      alert("Erro ao enviar reembolso.");
    }
  };

  // ----- FUNÇÃO COPILOT, APÓS USO, DESCOMENTAR FUNÇÃO ACIMA ----
  // const enviarParaAnalise = async () => {
  //   try {
  //     const response = await Api.post("http://localhost:5000/reembolso/refunds/new", dadosReembolso, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.log("Resposta da API", response);
  //     alert("Reembolso solicitado com sucesso!");
  //   } catch (error) {
  //     console.error("Erro ao enviar reembolso", error);
  //     alert("Erro ao enviar reembolso. Verifique os dados e tente novamente.");
  //   }
  // };
  // const enviarParaAnalise = async () => {
  //   try {
  //     const response = await Api.post("http://localhost:5000/reembolso/refunds/new)", dadosReembolso, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.log("Resposta da API", response);
  //     alert("Reembolso solicitado com sucesso!");
  //   } catch (error) {
  //     console.error("Erro ao enviar reembolso", error);
  //     alert("Erro ao enviar reembolso. Verifique os dados e tente novamente.");
  //   }
  // };
  // ----- FIM FUNÇÃO COPILOT ----

  //------------- FIM FUNÇÃO EnviarParaAnalise ----------------

  useEffect(() => {
    if (foiEnviado) { // Se o formulário foi enviado, chamamos a função enviarParaAnalise
      setDadosReembolso([]); // Limpa os dados do reembolso após o envio
      setFoiEnviado(false); // Reseta o estado foiEnviado para false
    }
  }, [foiEnviado])

  // função para excluir linha na tabela
  const [indiceExcluir, setIndiceExcluir] = useState(null); // Índice da linha a ser excluída

  function abrirModalConfirmacao(index) {
    setIndiceExcluir(index); // Define o índice da linha a ser excluída
    setAbrirModal(true); // Abre o modal
  }

  function excluirLinha() {
    const novosDados = dadosReembolso.filter((_, index) => index !== indiceExcluir); // Remove a linha pelo índice
    setDadosReembolso(novosDados); // Atualiza o estado com os dados restantes
    setAbrirModal(false); // Fecha o modal
    setIndiceExcluir(null); // Reseta o índice
  }
  //-- Fim função para excluir linha na tabela

  // Modal de confirmação de exclusão
  const [abrirModal, setAbrirModal] = useState(false);

  // function abrirModalConfirmacao() {
  //   setAbrirModal(true);
  // }

  function fecharModalConfirmacao() {
    setAbrirModal(false);
  }
  // fim do modal de confirmação de exclusão

  // Modal para exibir o motivo
  function abrirModalMotivo(motivo) {
    setMotivoSelecionado(motivo);
    setModalMotivoAberto(true);
  }

  function fecharModalMotivo() {
    setModalMotivoAberto(false);
    setMotivoSelecionado('');
  }
  // Fim do modal para exibir o motivo

  return (
    <div className={styles.layoutSolicitacaoReembolsos}>
      <NavBar />
      <div className={styles.containerPrincipal}>
        <div className={styles.boxHeader}>
          <header>
            <div className={styles.HeaderObjetos}>
              <img src={Home} alt="" onClick={IrParaReembolso} style={{ cursor: "pointer" }} />
              <img src={Seta} alt="" />
              <p onClick={IrParaReembolso} style={{ cursor: "pointer" }}>Reembolsos</p>
              <img src={Seta} alt="" />
              <p>Solicitação de Reembolsos</p>
            </div>
          </header>
        </div>

        <main className={styles.mainSolicitacao}>
          <form
            action=""
            className={styles.formSolicitacao}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.grupo1}>
              <div className={styles.inputNome}>
                <label htmlFor=""> Nome completo </label>
                <input
                  type="text"
                  name="nomeCompleto"
                  id="nomeCompleto"
                  value={colaborador}
                  onChange={(e) => setColaborador(e.target.value)}
                />
              </div>
              <div className={styles.inputEmpresa}>
                <label htmlFor=""> Empresa </label>
                <input
                  type="text"
                  name=""
                  id="empresa"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                />
              </div>
              <div className={styles.inputContas}>
                <label htmlFor=""> Nº Prest. Contas </label>
                <input
                  type="number"
                  name=""
                  id="nPrestacao"
                  value={prestacaoContas}
                  onChange={(e) => setPrestacaoContas(e.target.value)}
                />
              </div>
              <div className={styles.inputMotivo}>
                <label htmlFor=""> Descrição / Motivo do Reembolso </label>
                <textarea
                  type="text"
                  name=""
                  id="MotivoReembolso"
                  value={descricaoMotivo}
                  onChange={(e) => setDescricaoMotivo(e.target.value)}
                >
                  {" "}
                </textarea>
              </div>
            </div>

            <div className={styles.barraVertical}></div>

            <div className={styles.grupo2}>
              <div className={styles.inputData}>
                <label htmlFor=""> Data </label>
                <input
                  type="date"
                  name=""
                  id="data"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
              </div>

              <div className={styles.inputTipoDespesa}>
                <label htmlFor=""> Tipo de Despesa </label>
                <select
                  name=""
                  id=""
                  value={tipoDespesa}
                  onChange={(e) => setTipoDespesa(e.target.value)}
                >
                  <option value="Selecionar">Selecionar</option>
                  <option value="Alimentação"> Alimentação </option>
                  <option value="Combustível"> Combustível</option>
                  <option value="Condução"> Condução</option>
                  <option value="Estacionamento"> Estacionamento</option>
                  <option value="Viagem Admin."> Viagem Admin.</option>
                  <option value="Viagem Operacional">
                    {" "}
                    Viagem Operacional
                  </option>
                  <option value="Eventos de representação">
                    {" "}
                    Eventos de representação
                  </option>
                </select>
              </div>

              <div className={styles.inputCusto}>
                <label htmlFor=""> Centro de custo </label>
                <select
                  name=""
                  id=""
                  value={centroCusto}
                  onChange={(e) => setCentroCusto(e.target.value)}
                >
                  <option value="Selecionar">Selecionar</option>
                  <option value=" 1100109002 - FIN CONTROLES INTERNOS MTZ">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="1100110101 - FIN CONTABILIDADE MTZ<">
                    1100110101 - FIN CONTABILIDADE MTZ
                  </option>
                </select>
              </div>

              <div className={styles.inputOrdem}>
                <label htmlFor="">Ord. Int.</label>
                <input
                  type="number"
                  name=""
                  id=""
                  value={ordemInterna}
                  onChange={(e) => setOrdemInterna(e.target.value)}
                />
              </div>

              <div className={styles.inputDiv}>
                <label htmlFor="">Div.</label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={divisao}
                  onChange={(e) => setDivisao(e.target.value)}
                />
              </div>

              <div className={styles.inputPEP}>
                <label htmlFor="">PEP</label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={pep}
                  onChange={(e) => setPep(e.target.value)}
                />
              </div>

              <div className={styles.inputMoeda}>
                <label htmlFor="">Moeda</label>
                <select
                  type="text"
                  name=""
                  id=""
                  value={moeda}
                  onChange={(e) => setMoeda(e.target.value)}
                >

                  <option value="Selecione"> </option>
                  <option value="BRL">BRL - Real</option>
                  <option value="USD">USD - Dolar</option>
                  <option value="EUR">EUR - Euro</option>

                </select>
              </div>

              <div className={styles.inputDistancia}>
                <label htmlFor="">Dist / KM</label>
                <input
                  type="number"
                  name=""
                  id=""
                  value={distancia}
                  onChange={(e) => setDistancia(e.target.value)}
                />
              </div>

              <div className={styles.inputValorKm}>
                <label htmlFor="">Valor / KM</label>
                <input
                  type="number"
                  name=""
                  id=""
                  value={valorKm}
                  onChange={(e) => setValorKm(e.target.value)}
                />
              </div>

              <div className={styles.ValorFaturado}>
                <label htmlFor="">Val. Faturado</label>
                <input
                  type="number"
                  name=""
                  id=""
                  value={valorFaturado}
                  onChange={(e) => setValorFaturado(e.target.value)}
                />
              </div>

              <div className={styles.inputDespesa}>
                <label htmlFor="">Despesa</label>
                <input
                  type="number"
                  name=""
                  id=""
                  value={despesa}
                  onChange={(e) => setDespesa(e.target.value)}
                />
              </div>

              <div className={styles.DivBotoes}>
                <button className={styles.BotaoSalvar} onClick={handleSubmit}>
                  <img
                    src={Salvar}
                    alt="Botão para salvar o preenchimento do formulário"
                  />{" "}
                  Salvar
                </button>
                <button
                  type="button"
                  className={styles.BotaoApagar}
                >
                  <img
                    src={Deletar}
                    alt="Botão para limpar o preenchimento do formulário"
                    onClick={limparCampos}
                  />
                </button>
              </div>
            </div>
          </form>

          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>

            <tbody>
              {dadosReembolso.map((item, index) => (
                <tr key={index}>
                  <td className={`${styles.iconeLixeira} ${abrirModal ? styles.lixeiraAtiva : ''}`}>
                    <img
                      src={Lixeira}
                      alt="Ícone de lixeira para excluir a linha"
                      className={styles.lixeira}
                      onClick={() => abrirModalConfirmacao(index)} // Passa o índice da linha
                    />
                  </td>
                  <td>{item.colaborador}</td>
                  <td>{item.empresa}</td>
                  <td>{item.prestacaoContas}</td>
                  <td>{item.data}</td>
                  <td className={styles.celulaMotivo}>
                    <img
                      src={Motivo}
                      alt="Ícone de motivo"
                      className={styles.iconeMotivo}
                      style={{ cursor: "pointer" }}
                      onClick={() => abrirModalMotivo(item.descricaoMotivo)}
                    />
                  </td>
                  <td>{item.tipoDespesa}</td>
                  <td>{item.centroCusto}</td>
                  <td>{item.ordemInterna}</td>
                  <td>{item.divisao}</td>
                  <td>{item.pep}</td>
                  <td>{item.moeda}</td>
                  <td>{item.distancia}</td>
                  <td>{item.valorKm}</td>
                  <td>{item.valorFaturado}</td>
                  <td>{item.despesa}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Modal para confirmação de exclusão */}
          {abrirModal && (
            <div className={styles.containerModalExcluir}>
              <div className={styles.modalExcluir}>
                <h2>Deseja realmente excluir os dados dessa linha?</h2>
                <div className={styles.Botoes}>
                  <button type="button" onClick={fecharModalConfirmacao} className={styles.continuarEditando}>
                    Continuar editando
                  </button>
                  <button type="button" onClick={excluirLinha} className={styles.excluirLinha}>
                    Sim, excluir
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Fim do modal de confirmação de exclusão */}
          
          {/* Modal para exibir o motivo */}
          {modalMotivoAberto && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalMotivo}>
                <h3>Motivo do Reembolso:</h3>
                <p>{motivoSelecionado}</p>
                <button className={styles.botaoFecharModal} onClick={fecharModalMotivo}>X</button>
              </div>
            </div>
          )}
          {/* Fim do modal para exibir o motivo */}
        </main>
        <footer className={styles.footerSolicitacao}>
          <div className={styles.inputTotais}>
            <div className={styles.TotalFaturado}>
              <label htmlFor="">Total Faturado</label>
              <input type="text" name="" id="" placeholder="0.00" />
            </div>

            <div className={styles.TotalDespesa}>
              <label htmlFor="">Total Despesa</label>
              <input type="text" name="" id="" placeholder="0.00" />
            </div>
          </div>

          <div className={styles.FooterBotoes}>
            <button className={styles.EnviarParaAnalise} onClick={enviarParaAnalise}>
              <img src={Check} alt="" />
              <p>Enviar para Análise</p>
            </button>
            <button className={styles.CancelarSolicitacao}>
              <img src={Delete} alt="" />
              <p>Cancelar Solicitação</p>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Solicitacao; 
