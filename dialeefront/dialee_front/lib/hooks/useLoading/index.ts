import { useRecoilState } from "recoil";
import loadingState from "../../../atom/loadingState";
import { MIN_LOADING_TIME } from "../../constants";
interface IUseLoading{
    loadingOn:()=>void;
    loadingOff:(time?:number|null)=>void;
    loadingFake:(time:number,func:Function)=>void;
}
const useLoading=():IUseLoading=> {

    const [isLoading,setLoading]=useRecoilState(loadingState);
    const loadingOn=():void=>{
        setLoading(true);
    }
    const loadingOff=(time?:number|null):void=>{
            setTimeout(()=>setLoading(false),time?time:MIN_LOADING_TIME)
    }
    const loadingFake=(time:number,Func:Function):void=>{
        setLoading(true);
        setTimeout(()=>Func.call(this),1000);
        setTimeout(()=>{  setLoading(false)},time);
    }
    return {loadingOn,loadingOff,loadingFake}
}
export default useLoading;