import axios from "axios";

export const LOGIN_URL = "api/v1/accounts/login/";


export function login(login, password) {

     console.log()
    // return axios.post(LOGIN_URL, { email, password })
    return axios.post(process.env.REACT_APP_API_URL + LOGIN_URL, { login, password})
  }