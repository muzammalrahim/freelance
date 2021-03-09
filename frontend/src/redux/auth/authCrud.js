import axios from "axios";

export const LOGIN_URL = "api/v1/accounts/login/";

export const SIGNUP_URL = "api/v1/accounts/register/";

export const  Linkedin_redirect_urI  = "&redirect_uri=http://localhost:3000/linkedin"

export const  Linkedin_LOGIN_URL  = "api/v1/rest-auth/linkedin/"


export function login(login, password) {
    // return axios.post(LOGIN_URL, { email, password })
    return axios.post(process.env.REACT_APP_API_URL + LOGIN_URL, { login, password})
  }



export function sign_up(username, email,password,account_type,password_confirm,) {

    // return axios.post(LOGIN_URL, { email, password })
    return axios.post(process.env.REACT_APP_API_URL + SIGNUP_URL, {username, email,password,account_type,password_confirm})
  }


  export function GettingLinkedinAccessToken (code)
  {
    return axios.get(process.env.REACT_APP_LINKEDIN_API_URL+code+Linkedin_redirect_urI)

  }


  export function Linkedinlogin(access_token,code) {
   
    console.log("taimooooor access_token",access_token)
    console.log("taimooooor code",code)
    return axios.post(process.env.REACT_APP_API_URL + Linkedin_LOGIN_URL, { access_token, code})

  }
