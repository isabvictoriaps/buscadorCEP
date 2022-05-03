import axios from "axios";


// 08121620/json/

const api = axios.create({
    baseURL: "http://viacep.com.br/ws/"
})

export default api;
