import axios from "axios";

export const LOGIN_URL = "api/v1/accounts/login/";

export const SIGNUP_URL = "api/v1/accounts/register/";

   export const  Linkedin_redirect_url  = "redirect_uri=http://localhost:3000"


export function login(login, password) {
    // return axios.post(LOGIN_URL, { email, password })
    return axios.post(process.env.REACT_APP_API_URL + LOGIN_URL, { login, password})
  }



export function sign_up(username, email,password,account_type,password_confirm,) {

    // return axios.post(LOGIN_URL, { email, password })
    return axios.post(process.env.REACT_APP_API_URL + SIGNUP_URL, {username, email,password,account_type,password_confirm})
  }


  export function Linkedinlogin() {
    // return axios.post(LOGIN_URL, { email, password })
    console.log("oooops",process.env.REACT_APP_LINKEDIN_API_URL+Linkedin_redirect_url)
    return axios.get(process.env.REACT_APP_LINKEDIN_API_URL+Linkedin_redirect_url)
  }
