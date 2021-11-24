import { Children, ComponentProps } from "react";
import styled from "styled-components";
import FlexContainer from "../flexcontainer";
interface ICheckBoxProps{
    width:string;
    height:string;
    backgroundColor:string;
    labelColor:string;
    labelSize:string;
    display:string;
    children:string;
    border:string;
    name:string;
    checked:string;
}
interface ICheckBox{
    width:string;
    height:string;
    backgroundColor:string;
    border:string;
}
interface ILabel{
    labelColor:string;
    labelSize:string;
}
const StyledCheckBox=styled.input<ICheckBox>`
    width:${({width}:ICheckBox)=>
    {   if(width)
            return width;
        return '10px'; 
    }};
    height:${({height})=>{
        if(height)
            return height;
        return '10px';
    }};
    border:${({border})=>{
        if(border)
            return border;
        return '2px solid black'
    }};

   
`
const StyledLabel=styled.label<ILabel>`
    font-size:${({labelSize})=>{
        if(labelSize)
            return labelSize;
        return '18px';
    }};
    color:${({labelColor})=>{
        if(labelColor)
            return labelColor;
        return 'black';
    }};
`
const CheckBox=(props:ICheckBoxProps|ComponentProps<any>)=>{
    return(
    <FlexContainer direction="row" align="center" alignItems="center">
        <StyledCheckBox name={props.name} type="checkbox" width={props.width} height={props.height} border={props.border} backgroundColor={props.backgroundColor} defaultChecked={props.checked}></StyledCheckBox>   
        <StyledLabel labelSize={props.labelSize} labelColor={props.labelColor}>{props.children}</StyledLabel>
    </FlexContainer>
    )
}

export default CheckBox;