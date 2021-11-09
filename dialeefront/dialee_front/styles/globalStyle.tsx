
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


html,
body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: background 4s;
  height: 100%;
  -webkit-user-drag: none;
  -moz-user-select: none;
  user-select: none;
  animation: backgroundAnim forwards 4s;

  -webkit-touch-callout: none;
}
img {
  -webkit-user-drag: none;
  -moz-user-select: none;
  user-select: none;
}
@keyframes backgroundAnim {
  from {
    background-color: white;
  }
  to {
    background-color: black;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
header {
  height: 200px;
}


`
export default GlobalStyle;