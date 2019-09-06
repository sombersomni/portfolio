import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
//components
import { Container, FeatureContainer } from '../components/Containers.jsx';
import CurrentWork from '../components/CurrentWork.jsx';
import Project from '../components/Project.jsx';
import projects from '../data/projects';

const Projects = styled.div`
    display: relative;
    width: 25%;
    min-width: 200px;
    height: 100vh;
    max-height: 100vh;
    border-left: 2px solid black;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    padding-top: 80px;
    margin: 0;
`;

const ProjContainer = styled.div`
    position: sticky; 
    width: 100%; 
    min-width: 200px;
    height: 100%;
    max-height: 100%;
    color: black;
    z-index: 0;
    overflow-y: scroll;
`;

const ProjectFilters = styled.div``;

function Code() {
    const [projIndex, setCurrentProject] = useState(0)
    return (
        <Container>
            <MainContainer>
                <CurrentWork {...projects[projIndex]} />
                <Projects>
                    <ProjContainer>
                        {projects ? projects.map((project, i) => 
                        <Project 
                            key={i.toString()} 
                            {...project}
                            chosen={projIndex === i}
                            i={i}
                            setCurrentProject={setCurrentProject} />)
                        : null}
                    </ProjContainer>
                </Projects>
            </MainContainer>
        </Container>
    );
}

function mapStateToProps({ theme, mobile }) {
    return { theme, mobile }
}
export default connect(mapStateToProps)(Code);