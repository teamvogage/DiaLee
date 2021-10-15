import { ComponentProps, ReactChild, ReactComponentElement } from 'react';
import styled from 'styled-components';
import FlexContainer from '../../atoms/flexcontainer';
const StyledBtnList=styled.div<{listType:String}>`
    margin-top:${({listType}:ComponentProps<any>)=>{
        if(listType==="slideMenu"){
            return '30px';
        }

    }};
    width:${({listType}:ComponentProps<any>)=>{
        if(listType==="slideMenu"){
            return '400px';
        }
        
        return 'fit-content'
    }};
`
const ButtonList =({listType,children}:ComponentProps<any>)=>{
    let listProps:IbuttonListProps;
    listProps={
        direction:'row',
        align:'end',
        alignContent:'',
        alignItems:'String',
        wrap:'String',
      
        margin:'String',
    }
    if(listType==="slideMenu")
    listProps={
                direction:'column',
                align:'between',
                alignContent:'end',
                alignItems:'flex-end',
                wrap:'no-wrap',
                margin:'60px',
            }  
    

    return(
        <FlexContainer direction="row" align="start">
            <FlexContainer direction={listProps.direction} algin={listProps.align} alignContent={listProps.alignContent} alignItems={listProps.alignItems} wrap={listProps.wrap} margin={listProps.margin}>
            {children??children.map((val:any,i:number)=>{return val})}    
            </FlexContainer>
        </FlexContainer>
    )
}
export default ButtonList;

interface IbuttonListProps{
    direction:String;
    align:String;
    alignContent:String;
    alignItems:String;
    wrap:String;
    margin:String;
}