import { Cookies } from "react-cookie";
interface IuseCookie{
    getCookie:(name:string)=>string,
    setCookie:(name:string,value:string,options?:any)=>void,
    removeCookie:(name:string,options?:any)=>void
}
const useCookie =():IuseCookie=>{
    const cookie=new Cookies();
    const getCookie=(name:string)=>{
        return cookie.get(name);
    }
    const setCookie=(name:string,value:string,options?:any)=>{
        cookie.set(name,value,options)
    }
    const removeCookie=(name:string,options?:any)=>{
        cookie.remove(name,options)
    }
    return {getCookie,setCookie,removeCookie}
}

export default useCookie