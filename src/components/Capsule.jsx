import React from 'react';
import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
`;

const defaultStyle = `
padding: 4px 8px;
transition: background 1s;
border: none;
border-radius: 50px;
margin: 4px 10px;
text-transform: capitalize;
`;
const DefaultContainer = styled.div`
    ${defaultStyle}
    background: ${props => props.color || props.primaryColor};
    font-size: 0.8em;
    animation: 1s ${fadeIn} ${props => props.i * 100}ms ease-out both;
`;

const CapsuleContainer = styled.div`
    ${defaultStyle}
    background: ${props => props.selected ? props.secondColor : props.primaryColor};
    color: ${props => props.selected ? props.ternaryColor : 'white'};
    cursor: pointer;
    &:hover {
        background: ${props => props.secondColor};
        color: ${props => props.ternaryColor};
    }
`;

const OutlineContainer = styled.a`
   ${defaultStyle}
    color: white;
    border: 2px solid white;
    border-radius: 25px;
`;
export default function Capsule({ color, label, show, setChoice, selected, theme, i }) {
    return (
        <div>
            {show ? 
                <DefaultContainer 
                i={i}
                color={color}
                primaryColor={theme[5]}> {label} 
                </DefaultContainer> :
                <CapsuleContainer
                    selected={selected}
                    primaryColor={theme[6]}
                    secondColor={theme[5]}
                    ternaryColor={theme[3]}
                    onClick={setChoice}>
                    {label}
                </CapsuleContainer>}
        </div>
    );
}

export function OutlineCapsule({label, link}) {
    return (
        <div>
            <OutlineContainer 
                href={link}
                target='_blank'>
                {label}
            </OutlineContainer>
        </div>
    )
}