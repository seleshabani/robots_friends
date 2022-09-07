import { createGlobalStyle } from "styled-components";

const MainStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding:0px;
        margin:0px;
    }
    body{
        background-color: #00e9b1;
        background-image: linear-gradient(160deg, #00e9b1 0%, #241cb7 100%);
      }
`;

export default MainStyle;
