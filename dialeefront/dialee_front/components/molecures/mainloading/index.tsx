import { useEffect } from 'react';
import styled from 'styled-components';
import DisabledDiv from '../../atoms/disabledDiv';
import FlexContainer from '../../atoms/flexcontainer';
import Image from '../../atoms/image';
import loadingState from '../../../atom/loadingState';
import { useRecoilValue } from 'recoil';
const StyledLoadingImg=styled.div`
    animation:imgRotationAnim 1s infinite;
   

    @keyframes imgRotationAnim{
        from:
        {
            transform:rotate(0deg);
        }
        to:
        {   
            transform:rotate(360deg);
        }
    }
`
const MainLoading =()=>{
    const isLoading=useRecoilValue(loadingState);

    return(<>
        {isLoading===true&&<DisabledDiv height="800px">
            <FlexContainer direction="column" align="center " alignItems="center">
                <StyledLoadingImg>
                    <Image src="/imoticon/Ship.png" width="100px" height="100px"></Image>
                </StyledLoadingImg>
            </FlexContainer>
        </DisabledDiv>}
        </>
    )
}

export default MainLoading ;