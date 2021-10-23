import NextImage from 'next/image'
import { ComponentProps } from 'react'
import testImg from '../../../public/createBtn.png'
import styled from 'styled-components'
const StyledDiv=styled.div<{width:string,height:string,rotate:string,shadow:string}>`
    position:relative;
    width:${props=>props.width||`inherit`};
    height:${props=>props.height||`inherit`};
    :active{
        ${({rotate})=>rotate!=="no"?` animation:imgani 1s infinite;`:`none`}
       
    }
    


    box-shadow:${({shadow})=>shadow?shadow:null};
    @keyframes imgani{
        100%{
             transform:rotate(360deg);   
        }
    }
`
const Image=({src,width,height,alt,onClick,rotate,shadow}:ComponentProps<any>)=>{
    return (
    <StyledDiv width={width} height={height} shadow={shadow} rotate={rotate?rotate:""} onContextMenu={function(e){e.preventDefault()}}>
        <NextImage  src={src||testImg} layout={"fill"}  onClick={onClick}  alt={alt?alt:"image"} priority={true}>
        </NextImage>
    </StyledDiv>)
}
export default Image;