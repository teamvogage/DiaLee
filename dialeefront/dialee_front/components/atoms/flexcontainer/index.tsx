
import { ComponentProps } from "react"
import styled from "styled-components"
export interface IcontainerProps{
    wrap:string;
    direction:string;
    align:string;
    alignContent:string;
    alignItems:string;
    margin:string;
}

const StyledDiv=styled.div<IcontainerProps>`
    position:relative;
    width:100%;
    display:flex;
    margin-left:${({margin}:IcontainerProps)=>{return margin||"0px"}};
    flex-direction:${({direction}:IcontainerProps)=>{return direction||"row"}};
    flex-wrap::${({wrap}:IcontainerProps)=>{return wrap||"no-wrap"}};
    justify-content:${({align}:IcontainerProps)=>{
        if(align==="start")
        return 'flex-start'
        if(align==="end")
        return 'flex-end'
        if(align==="center")
        return 'center'
        if(align==="around")
        return 'space-around'
        return 'space-between'

    }};
    align-content:${({alignContent}:IcontainerProps)=>{return alignContent||null}};
    align-items:${({alignItems}:IcontainerProps)=>{return alignItems||null}};
`

const Container =({alignContent,alignItems,wrap,direction,align,children,margin}:ComponentProps<any>)=>{
    
    return(
        <StyledDiv alignContent={alignContent} alignItems={alignItems} wrap={wrap} margin={margin} direction={direction} align={align}>
            {children}
        </StyledDiv>
    )
}

export default Container