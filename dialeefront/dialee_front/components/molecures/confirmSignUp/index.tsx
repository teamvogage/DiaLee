import { ComponentProps } from "react";
import FlexContainer from "../../atoms/flexcontainer";
import Span from "../../atoms/span";
const ConfirmSignUp=({data}:ComponentProps<any>)=>{
    const dataKey=Object.keys(data);
    
    return(
    <FlexContainer direction="column" align="center" alignItems="center">
        {dataKey.map(value=><Span>{data[value]}</Span>)}
    </FlexContainer>
    )
}
export default ConfirmSignUp