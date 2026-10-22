import axios from "axios";

const api = axios.create({
    baseURL: "http://cool.uruz.id/api",
    timeout: 50000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

export default api