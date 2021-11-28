import styled from "styled-components";
import Button from "../../atoms/button";
import FlexContainer from "../../atoms/flexcontainer";
import Image from "../../atoms/image";
const StyledFooterContainer=styled.footer`
     position:fixed;
     height:30px;
     width:100%;
     max-width:700px;
   
     z-index:900;
     bottom:0;
     border-top:2px solid black;
     background-color:ghostwhite;   
        & :active{
            background-color:black;
        }
     transition:background-color 3s;
     `


const Footer=()=>{
    return(
        <StyledFooterContainer >
            

          
        </StyledFooterContainer>
     
    )
}

export default Footer;