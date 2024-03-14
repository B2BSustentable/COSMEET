import axios from "axios";

const apiBackend = axios.create({
    baseURL: "http://localhost:8080"
});

export default { apiBackend };