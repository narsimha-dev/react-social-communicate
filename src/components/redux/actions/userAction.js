import axios from 'axios';
import { BaseURL } from '../routerpath/BaseURL';

 export const REGISTER_USER="REGISTER_USER";
 export const TOKEN="TOKEN";
 export const LOGIN_USER="LOGIN_USER";
 export const INVALID_USER_EXISTING_USER="INVALID_USER_EXISTING_USER";
 export const ALERT_MESSAGE="ALERT_MESSAGE";

 export function registerUser(data) {
    return dispatch => {
      return axios.post(BaseURL+"/user/register",data)
        .then(json => {if(json.status===200){
            dispatch(gettingUserToken(data));
            dispatch(successRegister());
        }})
        .catch(error=>dispatch(invalidUserOrExistingUSer(error)))
    }
  }
  
  export function loginPage(value) {
    return {
        type: LOGIN_USER,
        isLoging:value,
        successMessage:'successfully user login',
        color:'success'


        }
}
function successRegister() {
    return {
        type:REGISTER_USER,
        successMessage:'successfully user register',
        color:'success'
}
}

function showAlertMessage() {
    return {
        type:ALERT_MESSAGE,
        showAlert:false
}
}

export function invalidUserOrExistingUSer(error) {
    return {
        type: INVALID_USER_EXISTING_USER,
        errorMessage:"invalidUserOrExistingUSer",
        color:'danger',
        showAlert:false
        }
}
 export function gettingUserToken(data) {
    return dispatch => {
      return axios.post(BaseURL+"/oauth/token",data)
        .then(json =>{ 
            console.log(json)
                      dispatch(storeToken(json))
                      dispatch(showAlertMessage())
        })
        .catch(error=>dispatch(invalidUserOrExistingUSer(error)))
    }
  }

  function storeToken(params) {
    return {
             type:TOKEN,
             token:params
     }
  }
