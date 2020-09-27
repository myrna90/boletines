import axios from "axios";
import { API_BASE_URL, ADMIN_TOKEN } from "../../../configuration";

const login = (email, password) => {
  return axios
    .request({
      method: 'POST',
      url: `${API_BASE_URL}/api/auth/sign-in`,
      
        auth: {
          username: email,
          password
        },
      data: {
        apiKeyToken: ADMIN_TOKEN
      }
    })
    .then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
    
};


const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  login,
  logout,
  getCurrentUser,
};