
import axios from "axios";
import authHeader from "./auth-header";
// export const API_URL = "http://localhost:8080/";
export const API_URL ="https://dao-manager-api-server.herokuapp.com/"
export const apiRequest = axios.create({
  baseURL: API_URL,
  headers: authHeader()
});