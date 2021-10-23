import { ComponentProps, ReactChild, ReactComponentElement } from 'react';
import styled from 'styled-components';
import FlexContainer from '../../atoms/flexcontainer';

const ButtonList =({listType,children}:ComponentProps<any>)=>{
    let listProps:IbuttonListProps;
    listProps={
        direction:'column',
        align:'between',
        alignContent:'end',
        alignItems:'flex-end',
        wrap:'no-wrap',
        margin:'60px',
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
    
    if(listType==="socialBtns")
       listProps={
            direction:'column',
            align:'center',
            alignContent:"",
            alignItems:'center',
            wrap:'no-wrap',
            margin:"0",
       }
    return(
      
            <FlexContainer direction={listProps.direction} algin={listProps.align} alignContent={listProps.alignContent} alignItems={listProps.alignItems} wrap={listProps.wrap} margin={listProps.margin}>
            {children??children.map((val:any,i:number)=>{return val})}    
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