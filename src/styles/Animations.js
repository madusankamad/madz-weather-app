import {keyframes} from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const loaderFade = keyframes`
  0% {
    opacity: 99;
  }


  90% {
    opacity: 0;
    width:100%;
    height:100%
  }
  
  100% {
    opacity: 0;
    display: none;
    width:0;
    height:0
  }
`;
