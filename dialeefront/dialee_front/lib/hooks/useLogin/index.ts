import {useRecoilState} from 'recoil'
import loginState from '../../../atom/loginState';
import { sendLogin, sendLogout,sendRefresh } from '../../axios';
import useLoading from '../useLoading'
import useCookie from '../useCookie'
import {oneMonth} from '../../js/setDate'
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
                    const expires=oneMonth()
                    setCookie("refresh_token",res.data.access_token||"no-token",{expires:expires});
                    setCookie("access_token",res.data.refresh_token||"no-token",);  
                }else{
                    setCookie("refresh_token",res.data.access_token||"no-token",);
                    setCookie("access_token",res.data.refresh_token||"no-token",);
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
                removeCookie("access_token");
                removeCookie("refresh_token");
                removeCookie("auto_login")
                setLogin(false);
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
          
            loadingOff(2000);
            if(res.data.status===true){
               
                const expires=oneMonth()
                setCookie("refresh_token",res.data.access_token||"no-token",{expires:expires});
                setCookie("access_token",res.data.refresh_token||"no-token",);
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