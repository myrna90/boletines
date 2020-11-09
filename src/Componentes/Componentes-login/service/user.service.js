import axios from "axios";
import authHeader from "./auth-header";
import {API_BASE_URL} from "../../../configuration";

const API_URL = `${API_BASE_URL}/api/newsletters`;

const getPublicContent = () => {
  return axios.get(API_URL + "/");
};

const getUserBoard = () => {
  return axios.get(API_URL + "vista", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "vista/admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getAdminBoard,
};