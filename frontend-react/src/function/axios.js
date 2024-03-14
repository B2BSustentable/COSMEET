import axios from "axios";

const apiEmpresa = axios.create({
    baseURL: "http://localhost:8080/empresas" // nao sei como ta
});


export default { apiEmpresa };