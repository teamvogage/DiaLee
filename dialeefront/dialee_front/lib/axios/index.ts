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
        console.log(data);
        const res=await axios.post(`${api}/accounts/`,data);
    console.log(res.data);}catch(error){
        console.log(error);
    }
}