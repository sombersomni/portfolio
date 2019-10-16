import { keyframes } from 'styled-components';

export const menuShow = function (color, endOpacity) {
    return keyframes`
    0% {
        background: rgba(${color},1);
    }
    75% {
        background: rgba(${color},1);
    }
    100% {
        background: rgba(${color},${endOpacity});
    }
    `
};

export const menuMove = keyframes`
    0% {
        top: 100%;
    }
    75% {
        top: -1px;
    }
    100% {
        top: 0%;
    }
`;

export const displayMessage = function (pos="bottom") {
    return keyframes`
    0% {
        opacity: 0;
        bottom: 30px;
    }
    25% {
        opacity: 1;
        bottom: 60px;
    }
    50% {
        opacity: 1;
        bottom: 60px;
    }
    100% {
        opacity: 0;
        bottom: 30px;
    }
    `
};