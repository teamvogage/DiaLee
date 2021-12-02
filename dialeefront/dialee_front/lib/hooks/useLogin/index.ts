import {useRecoilState} from 'recoil'
import loginState from '../../../atom/loginState';
import { sendLogin, sendLogout,sendRefresh } from '../../axios';
import useLoading from '../useLoading'
import useCookie from '../useCookie'
import {oneMonth} from '../../js/setDate'
import Router from 'next/router'
interface IUseLogin{
    login:(email:string,password:string)=>Promise<string|undefined>;
    logout:()=>Promise<string|undefined>;
    autoLogin:()=>void;
    checkLogin:()=>Promise<boolean>;
}
const useLogin=():IUseLogin=>{
    const [isLogin,setLogin]=useRecoilState(loginState);
    const {loadingOn,loadingOff}=useLoading();
    const {getCookie}=useCookie()
    const login=async(email:string,password:string)=>{
        try{
           
            loadingOn();
            const res=await sendLogin(email,password);
            loadingOff();

            if(res.data.status===true){
                
               
                setLogin(true);
            }else{
              
                setLogin(false);
            }
            return res.data.message
        }catch(error){
            if(error)
                return "다시 시도해주세요.(error occured!)"
        }
    }
    const logout=async()=>{
        try{
            loadingOn();
            const res=await sendLogout();
            loadingOff();
            if(res.data.status===true){
               
                setLogin(false);
            }
            Router.push('/')
            return res.data.message;
        }catch(error){
            setLogin(false);
            Router.push('/')
            if(error)
            return "다시 시도해주세요.(error occured!)"
        }
        
    }
    const autoLogin=async()=>{
        try{
            loadingOn();
            const refresh_token=getCookie("refresh_token")
            const res=await sendRefresh(refresh_token);
            loadingOff();
            if(res.data.status===true){
              
                setLogin(true);
            }else{
           
                setLogin(false);
            }
        }catch(error){
           setLogin(false);
        }
    }
    const checkLogin=async()=>{
        const access=getCookie("access_token");
        if(access!==undefined||null){
            setLogin(true);
            return true;
        }
            
        else{
            setLogin(false);
            return false;
        }
    }
    return {login,logout,autoLogin,checkLogin}
}
export default useLogin;