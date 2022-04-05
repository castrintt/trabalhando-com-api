import axios from "axios"; //importando a biblioteca
const api = axios.create({ //metodo create
    baseURL:'https://sujeitoprogramador.com/rn-api/'
})
export default api  //exportando a variavel criada para usar nos outros arquivos