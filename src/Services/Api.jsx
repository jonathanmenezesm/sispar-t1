//importa a biblioteca axios que é uma biblioteca para fazer requisições HTTP (GET, POST, PUT, DELETE)
import axios from "axios";

//cria uma instância do axios com a URL base da API
const api = axios.create({
    // baseURL:"http://localhost:5000" //URL para desolvovimento local
    baseURL: "https://api-t1-rxlj.onrender.com" //Define a url base para todas as requisições feitas com essa instancia. Essa url é a url do servidor que está rodando a API.
    })
export default api;