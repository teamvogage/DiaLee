import axios, { AxiosError } from "axios"
import {api} from "../constants"
export interface ISendAccountData{
    [index:string]:string;
    "voyager_name": string,
    "email": string,
    "password1": string,
    "password2": string
}
export interface ICheckData{
    "is_valid":Boolean,
    "message":string,
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
        console.log(error);
        if(!(error as AxiosError).response){
            const NoResponse:ICheckData={
                is_valid:false,
                message:"인터넷 문제나 서버문제가 발생하였습니다."
            }
            return {data:NoResponse}
        }
        if ((error as AxiosError).response?.status === 409) {
            const Conflict:ICheckData={
                is_valid:false,
                message:"이메일이 중복입니다."
            }
            return {data:Conflict};
        }
        else{
            const ServerError:ICheckData={
                is_valid:false,
                message:"서버 오류가 발생하였습니다."
            }
            ServerError.message=`${ServerError.message}::${(error as AxiosError).response?.status}`
            return {data:ServerError};
        }
        
     }
}