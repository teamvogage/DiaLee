import Header from "../../organisms/header"
import FlexContainer from '../../atoms/flexcontainer'
import Footer from "../../organisms/footer"
import disabledMainState from "../../../atom/disabledMainState";
import DisabledDiv from "../../molecures/mainloading";
import { ComponentProps } from "react"

import styled from 'styled-components';
import { useRecoilValue } from "recoil";

const StyledMain =styled.main`
height:640px;
border-left:4px solid black;
        border-bottom:2px solid black;
        border-top:2px solid black;
        border-right:4px solid black;
        word-break:break-all;
`
const Main=({children}:ComponentProps<any>)=>{
    const isDisabledMain=useRecoilValue(disabledMainState);

return (
        <FlexContainer direction= "column" align="start">
                <Header/>
                    <StyledMain>
                    {isDisabledMain?<DisabledDiv></DisabledDiv>:null}
                        {children}            
                    </StyledMain>                 
                <Footer/>
        </FlexContainer>    
    )   
}
export default Main;