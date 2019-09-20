import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
//components
import { Container, FeatureContainer } from '../components/Containers.jsx';
import CurrentWork from '../components/CurrentWork.jsx';
import Project from '../components/Project.jsx';
import projects from '../data/projects';
import DropSelect from '../components/DropSelect.jsx';

const Projects = styled.div`
    width: ${props => props.mobile ? '100%' : '25%'};
    min-width: 200px;
    height: 100vh;
    max-height: 100vh;
    border-left: 2px solid black;
`;

const MainContainer = styled.div`
    display: ${props => props.mobile ? 'block' : 'flex'};
    flex-direction: ${props => props.mobile ? 'column' : 'row'};
    flex-wrap: no-wrap;
    padding-top: 80px;
    margin: 0;
`;

const ProjContainer = styled.div`
    position: ${props => props.mobile ? "relative" :"-webkit-sticky"};
    position:  ${props => props.mobile ? "relative" : "sticky"};
    width: 100%; 
    min-width: 200px;
    height: ${props => props.mobile ? "200px" : "80%"};
    color: black;
    z-index: 0;
    overflow-y: scroll;
`;

const ProjectFilters = styled.div``;

function Code({mobile}) {
    const [projIndex, setCurrentProject] = useState(0);
    const [filterBy, setFilterBy] = useState('none');
    const projectsFiltered =  filterBy === 'none' ? projects : projects.filter(proj => proj.type.toLowerCase().includes(filterBy));
    return (
        <Container>
            <MainContainer mobile={mobile} >
                <CurrentWork {...projects[projIndex]} mobile={mobile} />
                <Projects mobile={mobile}>
                    <h3>Projects</h3>
                    <select onChange={e => { setFilterBy(e.target.value) }}>
                        <option value="none">None</option>
                        <option value="app">App</option>
                        <option value="module">Module</option>
                        <option value="website">Website</option>
                    </select>
                    <ProjContainer mobile={mobile}>
                        {projects ? projectsFiltered.map((project, i) =>
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