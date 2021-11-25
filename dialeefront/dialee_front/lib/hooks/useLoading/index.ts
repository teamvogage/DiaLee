import { useRecoilState } from "recoil";
import loadingState from "../../../atom/loadingState";
import { MIN_LOADING_TIME } from "../../constants";
interface IUseLoading{
    loadingOn:()=>void;
    loadingOff:()=>void;
}
const useLoading=():IUseLoading=>{

    const [isLoading,setLoading]=useRecoilState(loadingState);
    const loadingOn=():void=>{
        setLoading(true);
    }
    const loadingOff=():void=>{
            setTimeout(()=>setLoading(false),MIN_LOADING_TIME)
    }
    return {loadingOn,loadingOff}
}
export default useLoading;