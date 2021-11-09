import styled from "styled-components";
const StyledFooterContainer=styled.footer`
     position:sticky;
     height:30px;
     width:100vw;
     display:flex;
     z-index:2999;
     margin:0;
    left:0px;
     border-top:2px solid black;
     
     bottom:0px; 
     background-color:ghostwhite;   
`


const Footer=()=>{
    return(
        <StyledFooterContainer onClick={function(){window.scrollTo(0,2000);console.log("hi")}}>
              
        </StyledFooterContainer>
    )
}

export default Footer;