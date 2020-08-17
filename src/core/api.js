import axios from 'axios';

const api = axios.create({
  baseURL: 'BASE URL',
  timeout: 3000,
});

api.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const login = (device_id) => {
  console.log(device_id);
  // let body = {
  //   device_id,
  // };

  // let url = 'login';
  // return api.post(url, body);
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
