import {useRecoilState} from 'recoil'
import loginState from '../../../atom/loginState';
import { sendLogin, sendLogout } from '../../axios';

interface IUseLogin{
    login:(email:string,password:string)=>Promise<string|undefined>;
    logout:()=>Promise<string|undefined>;
}
const useLogin=():IUseLogin=>{
    const [isLogin,setLogin]=useRecoilState(loginState);
    const login=async(email:string,password:string)=>{
        try{
          
            const res=await sendLogin(email,password);
           
            if(res.data.status===true){
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
          
            const res=await sendLogout();
           
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