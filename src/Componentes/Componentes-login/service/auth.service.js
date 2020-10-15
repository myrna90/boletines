import axios from 'axios';
import { API_BASE_URL, ADMIN_TOKEN } from '../../../configuration';

const login = (email, password) => {
  return axios
    .request({
      method: 'POST',
      url: `${API_BASE_URL}/auth/sign-in`,

      auth: {
        username: email,
        password,
      },
      data: {
        apiKeyToken: ADMIN_TOKEN,
      },
      validateStatus: () => true,
    })
    .then((res) => {
      if (res.status !== 401) {
        if (res.data.token) {
          localStorage.setItem('user', JSON.stringify(res.data));
        }
      }
      return res;
    })
    .catch((err) => {
      return 'ERR_CONNECTION_REFUSE';
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  login,
  logout,
  getCurrentUser,
};
