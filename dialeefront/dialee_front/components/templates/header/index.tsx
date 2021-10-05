
import styled from 'styled-components'
import Button from '../../atoms/button'
const StyledHeaderMiddle = styled.div`
        background-color:${props=>props.theme.colors.main};
        color:${props=>props.theme.colors.color3};
        display:flex;
        justify-content:center;
        align-items:center;
        height:250px;
      
        font-size:${props=>props.theme.fontSize.large}
    `;
const StyledHeaderTop=styled.div`
        background-color:${props=>props.theme.colors.color2};
        display:flex;
        justify-content:left;
        align-items:left;
        height:30px;
`;
const StyledHeaderBottom=styled.div`
        background-color:${props=>props.theme.colors.color1};
        height:30px;
`
const Header=()=>{
  
    return(
        <header>
        <StyledHeaderTop>
            <Button btn_type="menu" src={'/createBtn.png'}>메뉴</Button>
        </StyledHeaderTop>
        <StyledHeaderMiddle>
            hi
        </StyledHeaderMiddle>
        <StyledHeaderBottom> 
        </StyledHeaderBottom>
        </header>
    )
}
export default Header