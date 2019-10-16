import { keyframes } from 'styled-components';

export const fadeOut = keyframes`
  0% {
      opacity: 1;
  }
  100% {
      opacity: 0;
  }
`;

export const nothing = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;
export const fadeIn = keyframes`
  0% {
      opacity: 0;
      transform: translateY(10px);
  }
  100% {
      opacity: 1;
      transform: translateY(0px);
  }
`;

export const simpleFadeIn = keyframes`
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
`;

export const linearReg = keyframes`
  0% {
    transform: rotate(0deg);
    color: rgba(255,0,0,1);
  }
  40% {
      transform: translate(0,-40px) rotate(-60deg);
      color: rgba(200,55,0,1);
  }
  70% {
    transform: translate(0,-45px) rotate(-35deg);
    color: rgba(0,255,10,1);
  }
  80% {
    transform: translate(0,-38px) rotate(-40deg);
    color: rgba(0,255,50,1);
  }
  90% {
    transform: translate(0,-34px) rotate(-30deg);
    color: rgba(0,255,50,1);
  }
  100% {
    transform: translate(0,-35px) rotate(-32deg);
    color: rgba(0,255,50,1);
  }
`;
