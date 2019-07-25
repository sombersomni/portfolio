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

export default function Capsule({ label, show, setChoice, selected }) {
    const CapsuleContainer = styled.div`
        ${defaultStyle}
        background: ${selected ? '#666' : 'rgba(0,0,0,0)'};
        cursor: pointer;
        &:hover {
            background: #666;
        }
    `;

    return (
        <div>
            {show ? <DefaultContainer> {label} </DefaultContainer> :
                <CapsuleContainer onClick={setChoice}> {label} </CapsuleContainer>}
        </div>
    );
}