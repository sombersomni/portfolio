import React from 'react';
import ArrowButton from './ArrowButton.jsx';
import styled from 'styled-components';

const WorkContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: yellow;
`;

const WorkTitle = styled.div`
    width: 400px;
    height: 400px;
    background: red;

`;

const Work = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: row;
`;
export default function CurrentWork() {
    return (
        <WorkContainer>
            <Work>
                <WorkTitle>
                    <h1>Encage</h1>
                    <h2>Protect Your Instances</h2>
                </WorkTitle>

            </Work>
            <ArrowButton label='See More' />
        </WorkContainer> 
    );
}