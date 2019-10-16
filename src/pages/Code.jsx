import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { throttle } from 'lodash';
//components
import { Container } from '../components/Containers.jsx';
import CurrentWork from '../components/CurrentWork.jsx';
import Project from '../components/Projectv2.jsx';
import projects from '../data/projects';
//import DropSelect from '../components/DropSelect.jsx';


const MainContainer = styled.div`
    display: ${props => props.mobile ? 'block' : 'flex'};
    flex-direction: ${props => props.mobile ? 'column' : 'row'};
    flex-wrap: no-wrap;
    padding-top: 80px;
    margin: 0;
`;

const ProjContainer = styled.div`
    position: ${props => props.mobile ? "relative" : "-webkit-sticky"};
    position:  ${props => props.mobile ? "relative" : "sticky"};
    width: 100%; 
    min-width: 200px;
    height: ${props => props.mobile ? "200px" : "80%"};
    color: black;
    z-index: 0;
    overflow-y: scroll;
`;

//const ProjectFilters = styled.div``;

function Code({ mobile, theme }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [filterBy, setFilterBy] = useState('none');
    const projectsFiltered = filterBy === 'none' ? projects : projects.filter(proj => proj.type.toLowerCase().includes(filterBy));

    function handleWheel(e) {
        console.log('activated wheel');
        if (e.deltaY > 0) {
            console.log('go down');
            setCurrentIndex(currentIndex < projects.length - 1 ? currentIndex + 1 : projects.length - 1);
        } else if (e.deltaY < 0) {
            console.log('go up');
            setCurrentIndex(currentIndex >= 1 ? currentIndex - 1 : 0);
        }
    }

    const throttledWheel = throttle(handleWheel, 5000);
    useEffect(() => {
        window.addEventListener('wheel', throttledWheel);
        return () => {
            window.removeEventListener('wheel', throttledWheel);
        }
    }, [])
    return (
        <Container>
            <Project
                {...projects[currentIndex]}
                theme={theme}
                currentIndex={currentIndex} />
        </Container>
    );
}

function mapStateToProps({ theme, mobile }) {
    return { theme, mobile }
}
export default connect(mapStateToProps)(Code);