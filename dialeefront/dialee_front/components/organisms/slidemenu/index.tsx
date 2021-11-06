import styled from 'styled-components';
import Button from '../../atoms/button';
import Image from '../../atoms/image';
import ButtonList from '../../molecures/buttonlist';
import FlexContainer from '../../atoms/flexcontainer';
import disabledMainState from '../../../atom/disabledMainState';
import {  useState } from 'react';
import {  useRecoilValue, useSetRecoilState } from 'recoil';
import headerImageState from '../../../atom/headerImageState';
const StyledSlideMenu = styled.div<{active:boolean}>`
    margin-left:${({active})=>active?`-300px`:`90px`};
    max-height:min-content;
    transition:margin-left 0.5s;
    margin-top:0;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
`;
const MenuButton=styled.div`
 position:absolute;
 z-index:3;
 top:0;
 left:0;
 width:33px;
 height:33px;
 background-color:white;
`
const StyledImage=styled.div<{left:string,bottom:string,rotate:string}>`
    left:${({left})=>left};
    bottom:${({bottom})=>bottom};
    transform:${({rotate})=>`rotate(${rotate})`};
    position:relative;

`
const StyledDiv=styled.div`
            margin-top:50px;

          
            z-index:3;
`

const SlideMenu=()=>{
    const [active,setActive]=useState(true);
    const [eraser,setEraser]=useState("/Eraser.png");
    const [click,setClick]=useState(0);
    const isDisabledMain=useRecoilValue(disabledMainState);
    const disabledMainHandler= useSetRecoilState(disabledMainState);
 
    const onClick=()=>{
        disabledMainHandler(!isDisabledMain);
        if(active===true){
        setClick(click+1);
  
        const random=Math.random()*100+1;
        if(random<3)
        setEraser("/EraserPrincess.png")
        else if(random<20)
        setEraser("/EraserUsed.png");
        else if(random<34)
        setEraser("/EraserApple.png");
        else if(random<35)
        setEraser("/EraserStar.png");
        else
        setEraser("/Eraser.png")
        }
        if(click===100){
            setEraser("/Eraser100.png")
        }else
        
        return setActive(!active);
    }
    
    return(
     <StyledSlideMenu active={active}>
         
         <MenuButton>
            <Button  type="button"  align="end"  direction="column"  btn_type="slideMenu" onClick={onClick}>
                   
            </Button>  
        </MenuButton>
         <StyledDiv>    
         <ButtonList listType="slideMenu" >
                
                <Button marginRight="12px" align="between" width="170px" alignItems="flex-start" direction="row" prefix="/imoticon/Gift.png" suffix="/imoticon/Star.png" btn_type="subMenu0">
                                메뉴
                    </Button>  
                    <Button marginRight="7px" align="between" width="170px"  alignItems="flex-start" direction="row" prefix="/imoticon/Gift.png" suffix="/imoticon/Star.png" btn_type="subMenu1">
                                메뉴
                    </Button>  
                    <Button marginRight="12px" align="between" width="170px"  alignItems="flex-start" direction="row" prefix="/imoticon/Gift.png" suffix="/imoticon/Star.png" btn_type="subMenu2">
                                메뉴
                    </Button>  
                    <Button marginRight="17px" align="between" width="170px"  alignItems="flex-start" direction="row" prefix="/imoticon/Gift.png" suffix="/imoticon/Star.png" btn_type="subMenu3">
                                메뉴
                    </Button> 
                    <Button marginRight="22px" align="between" width="170px" alignItems="flex-start" direction="row" prefix="/imoticon/Gift.png" suffix="/imoticon/Star.png" btn_type="subMenu4">
                                메뉴
                    </Button> 
        </ButtonList>
       
        </StyledDiv>
        
        <FlexContainer direction="row" align="end">
            <StyledImage left="-50px" bottom="40px" rotate="-10deg">
                <Image rotate={"no"} src="/Pencil.png" width="40px" height="500px"></Image>
            </StyledImage>
            <StyledImage left="-30px" bottom="-100px" rotate="-10deg" >
                <Image src={eraser} width="150px" height="200px" ></Image>
            </StyledImage>
           
        </FlexContainer>
        
    </StyledSlideMenu>
    )
}
export default SlideMenu;