import { ComponentProps } from 'react';
import styled from 'styled-components';
const StyledList=styled.div<{listType:String}>`
  position:relative;
  right:0;
  min-width:${({listType})=>{
    if(listType==='noteRing')
      return "150px";
    return "150px"
  }};
  
  min-height:100%;
`

const List=({children,listType}:ComponentProps<any>)=>{
  return(
    <StyledList listType={listType}>
      {children}
    </StyledList>

  )
}

export default List;