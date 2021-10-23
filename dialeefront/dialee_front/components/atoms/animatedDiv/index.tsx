import { ComponentProps } from 'react'
import styled from 'styled-components'

const StyledDiv=styled.div<{animation:string,animationDelay:string,animationTime:string,animationFill:string}>`
animation-name:${({animation})=>animation};
animation-delay:${({animationDelay})=>animationDelay};
animation-duration:${({animationTime})=>animationTime};
animation-fill-mode:${({animationFill})=>animationFill};

@keyframes slideInTopAnim{
    from{
        opacity:0;
        margin-top:-300px;
    }
    to{
        margin-top:10px;
    }
};`
const AnimatedDiv=({animationFill,animationTime,animationDelay,animation,children}:ComponentProps<any>)=>{
    return(
        <StyledDiv animation={animation} animationDelay={animationDelay} animationFill={animationFill} animationTime={animationTime}>
            {children}
        </StyledDiv>
        )
}
export default AnimatedDiv;