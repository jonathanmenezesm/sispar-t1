import { useState } from 'react';
import Api from "../../Services/Api.jsx";
import { useNavigate } from 'react-router-dom';
// import Navbar from "../navbar/navbar.jsx";

function VerificarReembolso() {
  const [numero, setNumero] = useState('');
  const [reembolsos, setReembolsos] = useState([]);

  const buscarReembolso = async () => {
    if (!numero.trim()) {
      alert('Informe um número de prestação válido.');
      return;
    }

    try {
      const response = await Api.get(`https://api-t1-rxlj.onrender.com/reembolso/refunds/${numero}`);
      setReembolsos(response.data);
    } catch (error) {
      alert('Erro ao buscar dados: ' + (error.response?.data?.mensagem || error.message));
      setReembolsos([]); // limpa a lista se houver erro
    }
  };

  const navigate = useNavigate();
  const IrParaSolicitacao = () => {
    navigate('/solicitacao');
  };

  return (
    <div className="layout">
      <div className='containerMain'>
             
                {/* <Navbar /> */}
                <div className="verificar-reembolso">
                  <h2>Análise de Reembolsos</h2>
          
                  <div className="busca">
           <input
             type="number"
             placeholder="Nº Prestação"
             value={numero}
             onChange={(e) => setNumero(e.target.value)}
           />
           <button onClick={buscarReembolso}>Buscar</button>
                  </div>
                  <div className="voltar">
           <button onClick={IrParaSolicitacao}>Voltar</button>
                  </div>
          
                  {reembolsos.length > 0 && (
           <div className="tabela-container">
             <table>
               <thead>
                 <tr>
                   <th>Colaborador</th>
                   <th>Data</th>
                   <th>Tipo</th>
                   <th>Valor</th>
                   <th>Status</th>
                 </tr>
               </thead>
               <tbody>
                 {reembolsos.map((item) => (
                   <tr key={item.id}>
                     <td>{item.colaborador}</td>
                     <td>{item.data}</td>
                     <td>{item.tipo_reembolso}</td>
                     <td>{item.valor_faturado ? item.valor_faturado.toFixed(2) : 'N/A'}</td>
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
  );
}

export default VerificarReembolso;