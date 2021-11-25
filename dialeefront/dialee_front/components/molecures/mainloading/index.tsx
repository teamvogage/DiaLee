import { useEffect } from 'react';
import styled from 'styled-components';
import DisabledDiv from '../../atoms/disabledDiv';
import FlexContainer from '../../atoms/flexcontainer';
import Image from '../../atoms/image';
import loadingState from '../../../atom/loadingState';
import { useRecoilValue } from 'recoil';
const StyledLoadingImg=styled.div`
    animation:imgRotationAnim 1s infinite;
    z-index:10000;
    
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
    const srcs=["Anchor.png","Gift.png","Star.png","SunFlower.png","Heart.png"]
    const randomSrc=Math.floor(Math.random()*srcs.length);
    return(<>
        {isLoading===true&&
        <DisabledDiv height="100vh">
            <FlexContainer direction="column" align="center" alignItems="center">
                <StyledLoadingImg>
                    <Image src={`/imoticon/${srcs[randomSrc]}`} width="40px" height="40px"></Image>
                </StyledLoadingImg>
            </FlexContainer>
        </DisabledDiv>}
        </>
    )
}

export default MainLoading ;