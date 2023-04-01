import axios from 'axios';
import Cookies from 'js-cookie';
const token = Cookies.get("token");
const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  }
});

export default instance;
