
import { ComponentProps,memo } from "react"
import styled from "styled-components"
export interface IcontainerProps{
    wrap:string;
    direction:string;
    align:string;
    alignContent:string;
    alignItems:string;
    margin:string;
    flexGrow:string;
    width:string;
    height:string;
    background:string;
    zIndex:string;
}

const StyledDiv=styled.div<IcontainerProps>`
    position:relative;

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
    flex-grow:${({flexGrow})=>{return flexGrow||1}};
    align-content:${({alignContent}:IcontainerProps)=>{return alignContent||null}};
    align-items:${({alignItems}:IcontainerProps)=>{return alignItems||null}};
    background:${({background})=>{return background||null}};
    z-index:${({zIndex})=>{return zIndex||null}};
    
`

const FlexContainer =({background,zIndex,alignContent,alignItems,wrap,direction,align,children,margin,flexGrow,width,height}:ComponentProps<any>)=>{
    
    return(
        <StyledDiv zIndex={zIndex} background={background} width={width} height={height} alignContent={alignContent} flexGrow={flexGrow} alignItems={alignItems} wrap={wrap} margin={margin} direction={direction} align={align}>
            {children}
        </StyledDiv>
    )
}

export default FlexContainer