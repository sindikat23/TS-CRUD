import axios from "axios";


export const ApiClient = axios.create({
    baseURL: "https://679fda0024322f8329c4c4f0.mockapi.io/students/api"
})