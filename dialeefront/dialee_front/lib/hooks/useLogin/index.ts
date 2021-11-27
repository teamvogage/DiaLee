import {useRecoilState} from 'recoil'
import loginState from '../../../atom/loginState';
import { sendLogin, sendLogout,sendRefresh } from '../../axios';
import useLoading from '../useLoading'
import useCookie from '../useCookie'

interface IUseLogin{
    login:(email:string,password:string)=>Promise<string|undefined>;
    logout:()=>Promise<string|undefined>;
    autoLogin:()=>void;
}
const useLogin=():IUseLogin=>{
    const [isLogin,setLogin]=useRecoilState(loginState);
    const {loadingOn,loadingOff}=useLoading();
    const {getCookie,setCookie,removeCookie}=useCookie();
   
    const login=async(email:string,password:string)=>{
        try{
            loadingOn();
            const res=await sendLogin(email,password);
            loadingOff(2000);

            if(res.data.status===true){
                const auto=getCookie("auto_login");
               
                if(auto==="true"){
                    const now =new Date();
                    const oneMonth=new Date();
                    oneMonth.setMonth(now.getMonth()+1);
                    setCookie("refresh_token",res.data.access_token||"no-token",{expires:oneMonth});
                    setCookie("access_token",res.data.refresh_token||"no-token",{maxAge:3600});  
                }else{
                    setCookie("refresh_token",res.data.access_token||"no-token",);
                    setCookie("access_token",res.data.refresh_token||"no-token",{maxAge:3600});
                }
               
                setLogin(true);
            }else{
                removeCookie("refresh_token");
                removeCookie("access_token");
                removeCookie("auto_login");
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
            loadingOff(2000);
            if(res.data.status===true){
                setLogin(false);
                removeCookie("refresh_token");
                removeCookie("auto_login")
            }
            return res.data.message;
        }catch(error){
            if(error)
            return "다시 시도해주세요.(error occured!)"
        }
    }
    const autoLogin=async()=>{
        try{
            loadingOn();
            const refresh_token=getCookie("refresh_token")
            const res=await sendRefresh(refresh_token);
            console.log(res);
            loadingOff(2000);
            if(res.data.status===true){
                const now =new Date();
                const oneMonth=new Date();
                oneMonth.setMonth(now.getMonth()+1);
               
                setCookie("refresh_token",res.data.access_token||"no-token",{expires:oneMonth});
                setCookie("access_token",res.data.refresh_token||"no-token",{maxAge:3600});
                setLogin(true);
            }else{
                removeCookie("refresh_token");
                removeCookie("access_token");
                removeCookie("auto_login");
                setLogin(false);
            }
        }catch(error){
           removeCookie("refresh_token");
           removeCookie("access_token");
           removeCookie("auto_login");
           setLogin(false);
        }
    }
    return {login,logout,autoLogin}
}
export default useLogin;