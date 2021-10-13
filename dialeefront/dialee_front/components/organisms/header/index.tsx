
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components'
import headerImageState from '../../../atom/headerImageState';
import Image from '../../atoms/image'
const StyledHeaderContainer=styled.header`
        max-height:30px;
        font-size:0;
        width:100%;
        top:0;
        border-left:4px solid black;
        border-bottom:2px solid black;
        border-top:2px solid black;
        border-right:4px solid black;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`
const StyledHeaderMiddle = styled.div`
        background-color:${props=>props.theme.colors.main};
        width:100%;
        height:33%;   
    `;
const StyledHeaderTop=styled.div`
        display:flex;
        justify-content:flex-start;
        background-color:${props=>props.theme.colors.color2};
        height:33%;
        width:100%;
`;
const StyledHeaderBottom=styled.div`
        background-color:${props=>props.theme.colors.color1};
        height:33%;
        width:100%;
`

const Header=()=>{
    const image=useRecoilValue(headerImageState);
    console.log(image);
    const images=["SunGlassses","Ball1","Cherry","Flower","Gift","Heart","Pumpkin","Retro","Star","SunFlower","Tube"];
    
    return(
        <StyledHeaderContainer>
        <StyledHeaderTop>
                <Image width="30px" height="30px" src={`/imoticon/${images[image]}.png`} ></Image>
        </StyledHeaderTop>
        <StyledHeaderMiddle>
        </StyledHeaderMiddle>
        <StyledHeaderBottom> 
                
        </StyledHeaderBottom>
        </StyledHeaderContainer>
    )
}
export default Header