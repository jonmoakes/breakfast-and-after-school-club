import { createGlobalStyle } from "styled-components";
import { customBlue } from "./styles/colors";

import BackgroundImage from "./assets/crayons.svg";

export const GlobalStyle = createGlobalStyle`
    html {
        width:100%;
        height:100vh;
        background-color: ${customBlue};
    }
    body {
        margin: 0px auto;
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

        ul {
            padding-left: unset;
            display: table;
            margin: 10px auto;
            font-size:18px;
            list-style-type: none;
        }

        li {
            margin-bottom:10px;
            color:${customBlue};

            

            @media screen and (max-width:450px) {
                font-size:16px;
            }
        }
    }
`;
