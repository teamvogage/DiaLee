import axios from "axios"
import {api} from "../constants"
export interface ISendAccountData{
    [index:string]:string;
    "username": string,
    "email": string,
    "password1": string,
    "password2": string
}

export const sendSignUp=async (data:ISendAccountData)=>{
    try{
        const res=await axios.post(`${api}/accounts/`,data);
        return res.data;
   }catch(error){
      return error;
    }
}
export const sendCheckEmail=async(email:string)=>{
    try{
        const data={
            "email":email
        }
      
        const res=await axios.post(`${api}/accounts/email-check/`,data);
        console.log(res.data);
        return res.data;
    }catch(error){
        return error;
    }
}