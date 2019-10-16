import { keyframes } from 'styled-components';

export const menuShow = function (color, endOpacity) {
    return keyframes`
    0% {
        background: rgba(${color},1);
        top: 100%;
    }
    75% {
        background: rgba(${color},1);
        top: 0%;
    }
    100% {
        background: rgba(${color},${endOpacity});
        top: 0%;
    }
    `
};