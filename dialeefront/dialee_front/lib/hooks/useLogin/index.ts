
import { sendLogin, sendLogout,sendRefresh } from '../../axios';
import useCookie from '../useCookie'
import {oneMonth} from '../../js/setDate'
import Router from 'next/router'
interface IUseLogin{
    login:(email:string,password:string)=>Promise<string|undefined>;
    logout:()=>Promise<string|undefined>;
    autoLogin:()=>void;
    checkLogin:()=>boolean;
}
const useLogin=():IUseLogin=>{
   
    const {getCookie}=useCookie()
    const login=async(email:string,password:string)=>{
        try{
            const res=await sendLogin(email,password);

            if(res.data.status===true){
                
                Router.push("/main");
                
            }else{
              
               Router.push("/");
            }
            return res.data.message
        }catch(error){
            if(error)
                return "다시 시도해주세요.(error occured!)"
        }
    }
    const logout=async()=>{
        try{
            const res=await sendLogout();
            Router.push('/')
            return res.data.message;
        }catch(error){
           
            Router.push('/')
            if(error)
            return "다시 시도해주세요.(error occured!)"
        }
        
    }
    const autoLogin=async()=>{
        try{
           
            const refresh_token=getCookie("refresh_token")
            console.log(refresh_token);
            const res=await sendRefresh(refresh_token);
           
            if(res.data.status===true){
                Router.push("/main");
               
            }else{
                Router.push('/')
               
            }
        }catch(error){
            Router.push('/')
          
        }
    }
    const checkLogin=()=>{
        const refresh_token=getCookie("refresh_token")
        if(refresh_token!==undefined||null){
          return true;
        }    
        else{
        return false;
        }
    }
    return {login,logout,autoLogin,checkLogin}
}
export default useLogin;