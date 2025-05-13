import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx"; 
import Reembolsos from "./components/reembolsos/Reembolsos.jsx";
import Solicitacao from "./components/solicitacao/Solicitacao.jsx";
import Cadastrar from "./components/cadastrar/Cadastrar.jsx";
import "./global.scss";
import Analises from "./components/analises/Analises.jsx"; // Importando o componente Analises


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/reembolsos" element={<Reembolsos />} />
                <Route path="/solicitacao" element={<Solicitacao />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/analises" element={<Analises />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;