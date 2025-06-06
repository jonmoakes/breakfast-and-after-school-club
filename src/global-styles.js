import { createGlobalStyle } from "styled-components";
import { customBlack, customBlue, customTomato } from "./styles/colors";

import BackgroundImage from "./assets/crayons.svg";

export const GlobalStyle = createGlobalStyle`
    html {
        width:100%;
        height:100vh;
        background-color: ${customBlue};
    }
    body {
        margin: 0px auto; line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight:bold;
        width:100%;
        height:100%;
        text-align:center;
        text-transform:capitalize;
        position: relative;
        &:before {
            content: "";
            display: block;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            z-index: -10;
            background: 
              url(${BackgroundImage}) repeat center center;
              -webkit-background-size: center;
              -moz-background-size: center;
              -o-background-size: center;
              background-size: contain;
              opacity:0.5;
        }

        p {
            font-size: calc(1rem + 0.25vw);
        }

        a {
            color:${customBlack};
            text-decoration:none;

            &.red {
                color:${customTomato};
                text-transform: "capitalize";
            }
        }  
    }
`;
