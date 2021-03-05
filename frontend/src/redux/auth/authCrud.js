import axios from "axios";

export const LOGIN_URL = "api/v1/accounts/login/";

export const SIGNUP_URL = "api/v1/accounts/register/";



export function login(login, password) {
    // return axios.post(LOGIN_URL, { email, password })
    return axios.post(process.env.REACT_APP_API_URL + LOGIN_URL, { login, password})
  }



export function sign_up(username, email,password,account_type,password_confirm,) {

    // return axios.post(LOGIN_URL, { email, password })
    return axios.post(process.env.REACT_APP_API_URL + SIGNUP_URL, {username, email,password,account_type,password_confirm})
  }