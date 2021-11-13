import { ComponentProps } from 'react'
import styled from 'styled-components'

const StyledDiv=styled.div<{animation:string,animationDelay:string,animationTime:string,animationFill:string}>`
animation-name:${({animation})=>animation};
animation-delay:${({animationDelay})=>animationDelay};
animation-duration:${({animationTime})=>animationTime};
animation-fill-mode:${({animationFill})=>animationFill};
will-change: transform  opacity; 
@keyframes slideInTopAnim{
    from{
       
        transform: translateY(-600px);
    }
    to{
        transform: translateY(0px);
    }
};
@keyframes slideInLeftAnim{
    0%{
       
        transform: translateX(-600px);
    }
    90%{
    
        transform: translateX(50px);
    }
   
}

`
const AnimatedDiv=({animationFill,animationTime,animationDelay,animation,children}:ComponentProps<any>)=>{
    return(
        <StyledDiv animation={animation} animationDelay={animationDelay} animationFill={animationFill} animationTime={animationTime}>
            {children}
        </StyledDiv>
        )
}
export default AnimatedDiv;