import React, {useState} from 'react';
import styled from 'styled-components';

const defaultStyle = `
padding: 4px 8px;
transition: background 1s;
border: none;
border-radius: 50px;
margin: 0px 10px;
cursor: pointer;
text-transform: capitalize;
`;
const DefaultContainer = styled.div`
    ${defaultStyle}
    background: yellow;
    font-size: 0.8em;
`;
const CapsuleContainer = styled.div`
    ${defaultStyle}
    background: rgba(0,0,0,0);
    &:hover {
        background: #AAA;
    }
`;

export default function Capsule({label, show}) {
    return (
        <div>
            { show ? <DefaultContainer> {label} </DefaultContainer> :
            <CapsuleContainer> {label} </CapsuleContainer> }
        </div>
    );
}