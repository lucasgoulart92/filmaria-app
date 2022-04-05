import axios from 'axios';

//https://sujeitoprogramador.com/r-api/?api=filmes/

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
});
// Puxa a URL base da API

export default api;
// exporta para importar na Home