import axios from 'axios';
import store from '../../../App';
import { BaseURL } from '../routerpath/BaseURL';
import {connect} from 'react-redux';

 export const POST_ADD="POST_ADD";
 export const POST_UPDATE="POST_UPDATE";
 export const POST_DELETE="POST_DELETE";
 export const SELECT_POSTS="SELECT_POSTS";
 export const POST_SUCCESS_MESSAGE="POST_SUCCESS_MESSAGE";
 export const POST_ERROR_MESSAGE="POST_ERROR_MESSAGE";

 let headerToken={
    headers:{
        'Authorization':"bearer"+ "hhhhjhjh.gjgjh.kuhyihh"
       }
 }
 export function postAdd(params){
     return dispatch=>{
      return axios.post(BaseURL+"posts/add",params,headerToken)     
                  .then(response=>console.log(response))
                  .catch(error=>dispatch(handleAPIErrorMessage(error)))
 }
}

 export function getToken(values){
          console.log("======",values,"=====***********");
 }
 function handleAPIErrorMessage(error){
     return {
         type:POST_ERROR_MESSAGE,
         message:"invalid post data, internal server",
         alert:false
     }
 }
