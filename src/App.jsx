import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx"; 
import Reembolsos from "./components/reembolsos/Reembolsos.jsx";
import Solicitacao from "./components/solicitacao/Solicitacao.jsx";
import Registrar from "./components/registrar/Registrar.jsx";
import "./global.scss";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/reembolsos" element={<Reembolsos />} />
                <Route path="/solicitacao" element={<Solicitacao />} />
                <Route path="/registrar" element={<Registrar />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;