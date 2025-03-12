import Navbar from "../navbar/navbar.jsx";
import styles from "./Solicitacao.module.scss"
import Home from "../../assets/Header/bHome.png"
import Seta from "../../assets/Dashboard/Vector.png"
import Lixeira from "../../assets/Solicitacao/lixeira.png"
import Motivo from "../../assets/Solicitacao/motivo.png"
import Salvar from "../../assets/Solicitacao/+.png"
import Deletar from "../../assets/Solicitacao/deletar.png"
import Check from "../../assets/Solicitacao/check.png"
import Delete from "../../assets/Solicitacao/x.png"

function Solicitacao() {
    return (

        <div className={styles.layoutSolicitacaoReembolsos}>
            <NavBar />

            <div className={styles.containerPrincipal}>

                <div className={styles.boxHeader}>
                    <header>
                        <div className={styles.HeaderObjetos}>
                            <img src={Home} alt="" />
                            <img src={Seta} alt="" />
                            <p>Reembolsos</p>
                            <img src={Seta} alt="" />
                            <p>Solicitação de Reembolsos</p>
                        </div>
                    </header>
                </div>

                <main className={styles.mainSolicitacao}>
                    <form action="" className={styles.formSolicitacao}>
                        <div className={styles.grupo1}>
                            <div className={styles.inputNome}>
                                <label htmlFor=""> Nome completo </label>
                                <input type="text" name="" id="nomeCompleto" />
                            </div>
                            <div className={styles.inputEmpresa}>
                                <label htmlFor=""> Empresa </label>
                                <input type="text" name="" id="empresa" />
                            </div>
                            <div className={styles.inputContas}>
                                <label htmlFor=""> Nº Prest. Contas </label>
                                <input type="text" name="" id="NPrestacaoContas" />
                            </div>
                            <div className={styles.inputMotivo}>
                                <label htmlFor=""> Descrição / Motivo do Reembolso </label>
                                <textarea type="text" name="" id="MotivoReembolso"> </textarea>
                            </div>
                        </div>

                        <div className={styles.barraVertical}>

                        </div>

                        <div className={styles.grupo2}>
                            <div className={styles.inputData}>
                                <label htmlFor=""> Data </label>
                                <input type="date" name="" id="data" />
                            </div>

                            <div className={styles.inputTipoDespesa}>
                                <label htmlFor=""> Tipo de Despesa </label>
                                <select name="" id="">
                                    <option value="">Selecionar</option>
                                    <option value=""> Alimentação </option>
                                    <option value=""> Combustível</option>
                                    <option value=""> Condução</option>
                                    <option value=""> Estacionamento</option>
                                    <option value=""> Viagem Admin.</option>
                                    <option value=""> Viagem Operacional</option>
                                    <option value=""> Eventos de representação</option>
                                </select>
                            </div>

                            <div className={styles.inputCusto}>
                                <label htmlFor=""> Centro de custo </label>
                                <select name="" id="">
                                    <option value="">Selecionar</option>
                                    <option value="">
                                        1100109002 - FIN CONTROLES INTERNOS MTZ
                                    </option>
                                    <option value="">
                                        1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                                    </option>
                                    <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
                                </select>
                            </div>

                            <div className={styles.inputOrdem}>
                                <label htmlFor="">Ord. Int.</label>
                                <input type="text" name="" id="" />
                            </div>

                            <div className={styles.inputDiv}>
                                <label htmlFor="">Div.</label>
                                <input type="text" name="" id="" />

                            </div>

                            <div className={styles.inputPEP}>
                                <label htmlFor="">PEP</label>
                                <input type="text" name="" id="" />

                            </div>

                            <div className={styles.inputMoeda}>
                                <label htmlFor="">Moeda</label>
                                <input type="text" name="" id="" />

                            </div>

                            <div className={styles.inputDistancia}>
                                <label htmlFor="">Dist / KM</label>
                                <input type="text" name="" id="" />

                            </div>

                            <div className={styles.inputValorKm}>
                                <label htmlFor="">Valor / KM</label>
                                <input type="text" name="" id="" />

                            </div>

                            <div className={styles.ValorFaturado}>
                                <label htmlFor="">Val. Faturado</label>
                                <input type="text" name="" id="" />

                            </div>

                            <div className={styles.inputDespesa}>
                                <label htmlFor="">Despesa</label>
                                <input type="text" name="" id="" />

                            </div>

                            <div className={styles.DivBotoes}>
                                <button className={styles.BotaoSalvar}>
                                    <img src={Salvar} alt="Botão para salvar o preenchimento do formulário" /> Salvar
                                </button>
                                <button className={styles.BotaoApagar}>
                                    <img src={Deletar} alt="Botão para limpar o preenchimento do formulário" />
                                </button>
                            </div>


                        </div>

                    </form>

                    {/* Table é a tag principal que define a tabela */}
                    {/* Thead é a tag que agrupa o cabeçalho */}
                    {/* Tr é a linha da tabela */}
                    {/* Th cabeçalho da tabela, cada coluna receberá um th -  */}
                    {/* tBody agrupa o corpo da tabela, ou seja, a parte principal onde armazena os dados */}
                    {/* Td representa uma célula onde cada dado é colocado */}

                    <div className={styles.tabela}>
                        <table>
                            <thead className={styles.tabela1}>
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
                                <tr>
                                    <td> <img src={Lixeira} alt="ícone da lixeira" /> </td>
                                    <td> Maria Vagas Figueira de Souza Santos Silva</td>
                                    <td> Shell</td>
                                    <td> 345</td>
                                    <td> 10/07 </td>
                                    <td> <img src={Motivo} alt="ícone do motivo" /></td>
                                    <td>Alimentação</td>
                                    <td>1100109002 - FIN CONTROLES INTERNOS MTZ</td>
                                    <td>2</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>BRL</td>
                                    <td>20km</td>
                                    <td>5.00</td>
                                    <td>20.00</td>
                                    <td>45.00</td>
                                </tr>
                                <tr>
                                    <td> <img src={Lixeira} alt="ícone da lixeira" /> </td>
                                    <td> Bolsonaro da Silva </td>
                                    <td> PL </td>
                                    <td> 345</td>
                                    <td> 15/07 </td>
                                    <td> <img src={Motivo} alt="ícone do motivo" /> </td>
                                    <td>Viagem Operacional </td>
                                    <td>1100109002 - FIN CONTROLES INTERNOS MTZ</td>
                                    <td>2</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>BRL</td>
                                    <td>20km</td>
                                    <td>5.00</td>
                                    <td>20.00</td>
                                    <td>45.00</td>
                                </tr>
                                <tr>
                                    <td> <img src={Lixeira} alt="ícone da lixeira" /> </td>
                                    <td> Lulinha da Silva </td>
                                    <td> PGR </td>
                                    <td> 345</td>
                                    <td> 10/07 </td>
                                    <td> <img src={Motivo} alt="ícone do motivo" /></td>
                                    <td>Viagem Administrativa </td>
                                    <td>1100109002 - FIN CONTROLES INTERNOS MTZ</td>
                                    <td>2</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>BRL</td>
                                    <td>20km</td>
                                    <td>5.00</td>
                                    <td>20.00</td>
                                    <td>45.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>






                </main>

                <footer className={styles.footerSolicitacao}>
                    <div className={styles.inputTotais}>
                        <div className={styles.TotalFaturado}>
                            <label htmlFor="">Total Faturado</label>
                            <input type="text" name="" id="" placeholder="0.00"/>
                        </div>

                        <div className={styles.TotalDespesa}>
                            <label htmlFor="">Total Despesa</label>
                            <input type="text" name="" id="" placeholder="0.00"/>
                        </div>
                    </div>

                    <div className={styles.FooterBotoes}>
                        <button className={styles.EnviarParaAnalise}>
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


    )
}
export default Solicitacao;