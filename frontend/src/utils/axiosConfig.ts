import axios from "axios";

const axiosConfig = axios.create({ baseURL: "http://localhost:8000/api"});

export default axiosConfig;
