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
  
  
    margin-left:${({active})=>active?`-300px`:`50px`};
    max-height:min-content;
    transition:margin-left 0.5s;
    
    
    margin-top:0;
`;
const MenuButton=styled.div`
 position:absolute;
 z-index:3;
 margin-top:-10px;
 left:0;
 width:33px;
 height:33px;
`
const StyledImage=styled.div<{left:string,bottom:string,rotate:string}>`
    left:${({left})=>left};
    bottom:${({bottom})=>bottom};
    transform:${({rotate})=>`rotate(${rotate})`};
    position:relative;

`
const StyledDiv=styled.div`
margin-top:50px;
`

const SlideMenu=()=>{
    const [active,setActive]=useState(true);
    const [eraser,setEraser]=useState("/Eraser.png");
    const [click,setClick]=useState(0);
    const isDisabledMain=useRecoilValue(disabledMainState);
    const disabledMainHandler= useSetRecoilState(disabledMainState);
    const headerImageHandler=useSetRecoilState(headerImageState);
    const onClick=()=>{
        disabledMainHandler(!isDisabledMain);
        if(active===true){
        setClick(click+1);
        headerImageHandler(click%10);
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
         <ButtonList listType="slideMenu">
                <Button align="between" width="170px" alignItems="flex-start" direction="row" prefix="/imoticon/Gift.png" suffix="/imoticon/Star.png" btn_type="subMenu0">
                                메뉴
                    </Button>  
                    <Button align="between" width="165px"  alignItems="flex-start" direction="row" prefix="/imoticon/Gift.png" suffix="/imoticon/Star.png" btn_type="subMenu1">
                                메뉴
                    </Button>  
                    <Button align="between" width="160px"  alignItems="flex-start" direction="row" prefix="/imoticon/Gift.png" suffix="/imoticon/Star.png" btn_type="subMenu2">
                                메뉴
                    </Button>  
                    <Button align="between" width="155px"  alignItems="flex-start" direction="row" prefix="/imoticon/Gift.png" suffix="/imoticon/Star.png" btn_type="subMenu3">
                                메뉴
                    </Button> 
                    <Button align="between" width="150px" alignItems="flex-start" direction="row" prefix="/imoticon/Gift.png" suffix="/imoticon/Star.png" btn_type="subMenu4">
                                메뉴
                    </Button> 
        </ButtonList>
        </StyledDiv>
        <FlexContainer direction="row" align="end">
            <StyledImage left="-20px" bottom="0px" rotate="30deg">
                <Image rotate={"no"} src="/Pencil.png" width="40px" height="500px"></Image>
            </StyledImage>
            <StyledImage left="-10px" bottom="-300px" rotate="-10deg" >
                <Image src={eraser} width="150px" height="200px" ></Image>
            </StyledImage>
         
        </FlexContainer>
        
    </StyledSlideMenu>
    )
}
export default SlideMenu;