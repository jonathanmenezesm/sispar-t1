import axios from "axios";

//cria uma instância do axios com a URL base da API
const api = axios.create({
    baseURL: "https://localhost:5000",
    })

export default api;