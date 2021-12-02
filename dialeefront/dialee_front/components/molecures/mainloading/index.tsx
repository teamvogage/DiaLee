import { useMemo, useState } from 'react';
import styled from 'styled-components';
import DisabledDiv from '../../atoms/disabledDiv';
import FlexContainer from '../../atoms/flexcontainer';
import Image from '../../atoms/image';
import loadingState from '../../../atom/loadingState';
import Span from '../../atoms/span'
import { LOADING_STRING } from '../../../lib/constants';
import { useRecoilValue } from 'recoil';
const StyledLoadingImg=styled.div`
    animation:imgRotationAnim 1s infinite;
    z-index:10000;
    position:absolute;
    @keyframes imgRotationAnim{
        from
        {
            transform:rotate(0deg);
        }
        to
        {   
            transform:rotate(360deg);
        }
    }
`

const MainLoading =()=>{
    const isLoading=useRecoilValue(loadingState);
    const srcs=["Anchor.png","Gift.png","FairyBall.png","SunFlower.png","Heart.png"]
    const randomSrc=useMemo(()=>Math.floor(Math.random()*srcs.length),[isLoading]);
    const randomStr=Math.floor(Math.random()*LOADING_STRING.length)
    const [loadingStr,setLoadingStr]=useState(LOADING_STRING[randomStr]);
    const onClick=()=>{
        let randomStr=Math.floor(Math.random()*LOADING_STRING.length)
        if(loadingStr===LOADING_STRING[randomStr])
            randomStr+=1
        randomStr%=LOADING_STRING.length;
        setLoadingStr(LOADING_STRING[randomStr]);
    }
    return(<>
        {isLoading===true&&
        <DisabledDiv height="100vh" zIndex="10000" onClick={onClick}>
            <FlexContainer direction="column" align="center" alignItems="center">
                <StyledLoadingImg>
                    <Image src={`/imoticon/${srcs[randomSrc]}`}  width="40px" height="40px"></Image>
                </StyledLoadingImg>
                <Span size="25" color="black" >{loadingStr}</Span>
            </FlexContainer>
        </DisabledDiv>}
        </>
    )
}

export default MainLoading ;