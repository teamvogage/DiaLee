import {useRecoilState} from 'recoil'
import loginState from '../../../atom/loginState';
import { sendLogin, sendLogout } from '../../axios';
import useLoading from '../useLoading'
import useCookie from '../useCookie'
interface IUseLogin{
    login:(email:string,password:string)=>Promise<string|undefined>;
    logout:()=>Promise<string|undefined>;
}
const useLogin=():IUseLogin=>{
    const [isLogin,setLogin]=useRecoilState(loginState);
    const {loadingOn,loadingOff}=useLoading();
    const {getCookie,setCookie,removeCookie}=useCookie();
    const login=async(email:string,password:string)=>{
        try{
            loadingOn();
            const res=await sendLogin(email,password);
            loadingOff(null);
            if(res.data.status===true){
                setCookie("refresh_token",res.data.access_token||"no-token");
                setCookie("access_token",res.data.refresh_token||"no-token");
                setLogin(true);
            }else{

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
            loadingOff(null);
            if(res.data.status===true){
                setLogin(false);
            }
            return res.data.message;
        }catch(error){
            if(error)
            return "다시 시도해주세요.(error occured!)"
        }
    }
    return {login,logout}
}
export default useLogin;