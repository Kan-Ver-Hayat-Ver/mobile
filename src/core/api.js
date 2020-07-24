import axios from 'axios';

const api = axios.create({
  baseURL: 'BASE URL',
  timeout: 3000,
});

api.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const login = (username, password) => {
  let body = {
    email: username,
    password: password,
  };

  let url = 'login';
  return api.post(url, body);
};

export const register = (
  first_name,
  last_name,
  email,
  password,
  phone,
  accepted,
) => {
  let body = {
    first_name,
    last_name,
    email,
    password,
    phone,
    accepted,
  };
  let url = 'signup';
  return api.post(url, body);
};
