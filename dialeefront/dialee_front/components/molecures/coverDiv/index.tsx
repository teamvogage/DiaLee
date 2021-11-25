import DisabledDiv from "../../atoms/disabledDiv";
import styled from 'styled-components'
const MoonDiv=styled.div`
  border-radius:100%;
  background:linear-gradient(rgba(255,255,255,0.01),rgba(255,255,255,0.9));
  position:absolute;
  width:70px;
  z-index:40;
  height:70px;
  top:20%;
  left:46%;

  will-change: transform;
  animation:upAnimation 4s infinite;
  @keyframes upAnimation{
    0%{
      transform: translateY(10px);
    }
    50%{
      transform: translateY(-10px);
    }
    100%{
      transform: translateY(10px);
    }
  }
`
const MoonLightDiv=styled.div`
  border-radius:100%;
  width:70px;
  height:70px;
  background:radial-gradient(rgba(255,255,255,0.01),rgba(255,255,255,0.9));
  position:absolute;
  width:70px;
  z-index:39;
  height:70px;
  top:20%;
  left:46%;
  animation:upAnimation 4s infinite;
`

const CoverDiv=()=>{

    return(
        <DisabledDiv>
            <MoonDiv></MoonDiv><MoonLightDiv></MoonLightDiv>
        </DisabledDiv>
    )
}
export default CoverDiv;