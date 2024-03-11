import axios from "axios";

const axiosConfig = axios.create({ baseURL: process.env.REACT_BASE_URL });

export default axiosConfig;
