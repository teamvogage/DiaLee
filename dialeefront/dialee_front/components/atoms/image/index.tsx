import NextImage from 'next/image'
import { ComponentProps,memo } from 'react'
import testImg from '../../../public/createBtn.png'
import styled from 'styled-components'
import next from 'next'
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
const memoDispatcher =(prevProps:Readonly<any>, nextProps:Readonly<any>)=>{
    if(prevProps.src !== nextProps.src)
    return false;
    if(prevProps.width!==nextProps.width)
    return false;
    if(prevProps.height!==nextProps.height)
    return false;
    if(prevProps.rotate!==nextProps.rotate)
    return false;
    if(prevProps.shadow!==nextProps.shadow)
    return false;
    return true;
}
export default memo(Image,memoDispatcher);