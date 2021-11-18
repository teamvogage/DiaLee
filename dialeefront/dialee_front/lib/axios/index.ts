import axios, { AxiosError } from "axios"
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
        const data={
            "email":email
        }
     try{
        const res=  await axios.post(`${api}/accounts/email-check/`,data);
        return res;
    }catch(error){
        if ((error as AxiosError).response?.status === 409) 
        return (error as AxiosError).response;
        else
        return {data:false,message:"서버 오류"}
     }
}