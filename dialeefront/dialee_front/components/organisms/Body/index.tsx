import styled from "styled-components";

const StyledBodyContainer=styled.div`
/*
##Device = Desktops
##Screen = 1281px to higher resolution desktops
##Device = 데스크탑
##Screen = 1281px 이상 해상도 데스크탑
*/
  
  
  border: 3px solid black;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: width 2s;

  max-width: 700px;
  width: 100vw;
  height: 100vh;
  font-size: 0px;
  background-color: black;

`
export default StyledBodyContainer;