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


@media (min-width: 1281px) {

    overflow-x: hidden;
    overflow-y: hidden;
    transition: width 2s;
  

  /*
  
  }
  
  /*
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
  ##Device = 랩탑, 데스크탑
  ##Screen = 1025px에서 1280px 사이
  */
}

@media (min-width: 1025px) and (max-width: 1280px) {
 
    overflow-x: hidden;
    overflow-y: hidden;
    transition: width 2s;
  
}
/*
  ##Device = Tablets, Ipads (portrait),
  ##Screen = B/w 768px to 1024px
  ##Device = 태블릿, 아이패드(세로),
  ##Screen = 768px에서 1024px 사이
  */

@media (min-width: 768px) and (max-width: 1024px) {
 
    overflow-x: hidden;
    overflow-y: hidden;
    transition: width 2s;
  
}

/*
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
  ##Device = 태블릿, 아이패드(가로)
  ##Screen = 768px에서 1024px 사이
  */

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
    overflow-x: hidden;
    overflow-y: hidden;
    transition: width 2s;
  
}

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
  ##Device = 저해상도 태블릿, 모바일(가로)
  ##Screen = 481px에서 767px 사이
  */

@media (min-width: 481px) and (max-width: 767px) {
 
    overflow-x: hidden;
    overflow-y: hidden;
    transition: width 2s;
  
}

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
  ##Device = 대부분의 스마트폰 모바일 기기(세로)
  ##Screen = 320px에서 479px 사이
  */

@media (min-width: 320px) and (max-width: 480px) {

    overflow-x: hidden;
    overflow-y: hidden;
    transition: width 2s;
  
}
@media (min-width: 375px) and (max-width: 480px) {
  div.body_container {
    overflow-x: hidden;
    overflow-y: hidden;
    transition: width 2s;
  }
}
@media (min-width: 360px) and (max-width: 480px) {
 
    overflow-x: hidden;
    overflow-y: hidden;
    transition: width 2s;
    /* min-width: 360px;
    max-width: 360px; */
  
}
@media (min-width: 411px) and (max-width: 481px) {

    overflow-x: hidden;
    overflow-y: hidden;
    transition: width 2s;
    /* min-width: 411px;
    max-width: 411px; */
  
}


`
export default StyledBodyContainer;