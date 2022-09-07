import { createGlobalStyle } from "styled-components";

export const MainStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding:0px;
        margin:0px;
    }
    body{
        background-color: ${({theme})=>theme==='light'?'#00e9b1':'#241cb7'};
        background-image: linear-gradient(160deg, ${({theme})=>theme==='light'?'#00e9b1':'#241cb7'} 0%, 
        ${({theme})=>theme==='light'?'#241cb7':'#00e9b1'} 100%);
        background-attachment: fixed;
      }
`;
