import styled from "styled-components";
import Button from "../../atoms/button";
import FlexContainer from "../../atoms/flexcontainer";
import Image from "../../atoms/image";
const StyledFooterContainer=styled.footer`
     position:absolute;
     height:30px;
     width:100%;
     left:0%;
     z-index:900;
     bottom:0;
     border-top:2px solid black;
     border-bottom:2px solid black;
     background-color:ghostwhite;   
        & :active{
            background-color:black;
        }
     transition:background-color 3s;
     `


const Footer=()=>{
    return(
        <StyledFooterContainer >
            <FlexContainer align="center" alignItems="center" >

            </FlexContainer>
        </StyledFooterContainer>
    )
}

export default Footer;