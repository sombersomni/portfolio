import React, { useState } from 'react';
import styled from 'styled-components';

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
    background: yellow;
    font-size: 0.8em;
`;

const CapsuleContainer = styled.div`
    ${defaultStyle}
    background: ${props => props.selected ? props.primaryColor : 'yellow'};
    cursor: pointer;
    &:hover {
        background: ${props => props.secondColor};
    }
`;
export default function Capsule({ label, show, setChoice, selected, theme }) {

    return (
        <div>
            {show ? <DefaultContainer> {label} </DefaultContainer> :
                <CapsuleContainer
                    selected={selected}
                    primaryColor={theme[0]}
                    secondColor={theme[4]}
                    onClick={setChoice}>
                    {label}
                </CapsuleContainer>}
        </div>
    );
}