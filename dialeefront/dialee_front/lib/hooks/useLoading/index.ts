import { useRecoilState } from "recoil";
import loadingState from "../../../atom/loadingState";
const useLoading=(maxTime:number)=>{
    
    const [isLoading,setLoading]=useRecoilState(loadingState);
    setLoading(!isLoading);
    if(maxTime)
    setTimeout(()=>setLoading(false),maxTime);
}
export default useLoading;