import React from 'react';
import ArrowButton from './ArrowButton.jsx';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';

const WorkContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: yellow;
    padding-top: 80px;
`;

const WorkTitle = styled.div`
    width: 25%;
    min-width: 300px;
    min-height: 75vh;
    background: white;
`;

const WorkHeader = styled.div`
    width: 70%;
    background: url(${props => props.bg});
`;

const Work = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: row;
`;
export default function CurrentWork({desc, title, headerImg, tagline}) {
    return (
        <WorkContainer>
            <Work>
                <WorkTitle>
                    <h1>{title}</h1>
                    <p style={{ fontWeight: 'bold', padding: 25 }}>{tagline}</p>
                    <p style={{ padding: 25 } }>{desc}</p>
                    <Chip
                        label="Visit Website"
                        component="a"
                        href="https://pick-flicks-app.herokuapp.com"
                        target="_blank"
                        style={{ marginBottom: 20 }}
                        clickable
                    />
                </WorkTitle>
                <WorkHeader bg={headerImg} />
            </Work>
            <ArrowButton label='See More' />
        </WorkContainer> 
    );
}