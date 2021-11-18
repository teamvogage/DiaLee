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
        const data={
            "email":email
        }
       await axios.post(`${api}/accounts/email-check/`,data).then((result) => {
        console.log(result.data);
        console.log(result.status);   
        if(result.status==200)
            return result.data;
        })
        .catch((error) => {
            if (error.response){
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                if(error.response.status===409)
                    return error.response.data;
                else
                    return {message:"서버 오류"}
                
            }else if(error.request){
                    return {message:"통신 오류"}
                    
                
            }else if(error.message){
                    return {message:"통신 오류"}
                     
            }
        })
}