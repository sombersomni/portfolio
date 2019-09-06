import React from 'react';
import ArrowButton from './ArrowButton.jsx';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';
import Project from './Project.jsx';

const WorkContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    background: yellow;
    padding-top: 80px;
`;

const WorkTitle = styled.div`
    width: 25%;
    min-width: 250px;
    background: white;
`;

const WorkHeader = styled.div`
    width: 75%;
    background: url(${props => props.bg});
    background-position: center;
`;

const Work = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const Projects = styled.div`
    width: 25%;
    min-width: 200px;
    height: 100%;
    background: #999;
    position: static;
`;
export default function CurrentWork({desc, title, headerImg, tagline}) {
    return (
        <WorkContainer>
            <Work>
                <WorkTitle>
                    <h1>{title}</h1>
                    <p style={{ fontWeight: 'bold', padding: 25 }}>{tagline}</p>
                    <p style={{ padding: 25 } }>{desc}</p>
                    {/* <Chip
                        label="Visit Website"
                        component="a"
                        href="https://pick-flicks-app.herokuapp.com"
                        target="_blank"
                        style={{ marginBottom: 20 }}
                        clickable
                    /> */}
                </WorkTitle>
                <WorkHeader bg={headerImg} />
            </Work>
            <Projects>
                
            </Projects>
        </WorkContainer> 
    );
}