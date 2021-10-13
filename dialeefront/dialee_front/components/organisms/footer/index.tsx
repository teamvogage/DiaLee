import styled from "styled-components";
const StyledFooterContainer=styled.footer`
min-height:30px;
font-size:0;
width:100%;
bottom:0px;
position:relative;
border-left:4px solid black;
        border-bottom:2px solid black;
        border-top:2px solid black;
        border-right:4px solid black;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
z-index:5;
`
const StyledFooterMiddle = styled.div`
        position:relative;
        background-color:${props=>props.theme.colors.color3};
        width:100%;
        height:10px;   
    `;
const StyledFooterTop=styled.div`
        position:relative;
        display:flex;
        justify-content:flex-end;
        background-color:${props=>props.theme.colors.main};
        height:10px;
        width:100%;
`;
const StyledFooterBottom=styled.div`
        position:relative;
        background-color:${props=>props.theme.colors.color2};
        height:10px;
        width:100%;
`

const Footer=()=>{
    return(
        <StyledFooterContainer>
           <StyledFooterTop/>
           <StyledFooterMiddle/>
           <StyledFooterBottom/>
        </StyledFooterContainer>
    )
}

export default Footer;