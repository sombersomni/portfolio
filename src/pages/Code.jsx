import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from 'react-spring/renderprops';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { debounce } from 'lodash';
//components
import Project from '../components/Projectv2.jsx';
import projects from '../data/projects';
import ProgressBar from '../components/ProgressBar.jsx';


const MainContainer = styled.div`
    margin: 0;
    &::-webkit-scrollbar { 
        display: none; 
    }
`;

const IconContainer = styled.div`
    position: absolute;
    ${props => props.up ? "top: 100px" : "bottom: 50px"};
    left: 50%;
    transform: translateX(-50%), scale(1);
    z-index: 95;
    color: white;
    opacity: 1;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }
`;

const ScrollMessage = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 100px;
    z-index: 95;
    cursor: pointer;
    background: white;
    border-radius: 25px;
    padding: 0px 10px;
    width: 100px;
    font-size: .8em;
    font-weight: bold;
`;

function Code({ mobile, theme }) {
    const [projectState, setProjectState] = useState({ currentIndex: 0, prevIndex: 0 });
    const [firstVisit, setFirstVisit] = useState(true);
    const [mouseActive, setMouseActive] = useState(true);
    let mouseTimeout;
    const duration = 2000;
    useEffect(() => {
        const dWheel = debounce(handleWheel, duration, { maxWait: duration + 1000, leading: true, trailing: false });
        window.addEventListener('wheel', dWheel);
        setTimeout(() => {
            window.addEventListener('mousemove', handleMouseMove);
        }, 5000);
        return () => {
            window.removeEventListener('wheel', dWheel);
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);
    const handleMouseMove = e => {
        clearTimeout(mouseTimeout);
        setMouseActive(false);
        mouseTimeout = setTimeout(() => {
            console.log('mouse deactivate');
            setMouseActive(true);
        }, 5000);

    }
    function handleClickUp() {
        clearTimeout(mouseTimeout);
        setMouseActive(false);
        mouseTimeout = setTimeout(() => {
            console.log('mouse deactivate');
            setMouseActive(true);
        }, 5000);
        setProjectState(prevState => ({
            currentIndex: prevState.currentIndex >= 1 ? prevState.currentIndex - 1 : 0,
            prevIndex: prevState.currentIndex
        }));
    }
    function handleClickDown() {
        if (firstVisit) {
            setFirstVisit(false);
        }
        clearTimeout(mouseTimeout);
        setMouseActive(false);
        mouseTimeout = setTimeout(() => {
            console.log('mouse deactivate');
            setMouseActive(true);
        }, 5000);
        setProjectState(prevState => ({
            currentIndex: prevState.currentIndex < projects.length - 1 ? prevState.currentIndex + 1 : projects.length - 1,
            prevIndex: prevState.currentIndex
        }));
    }
    const handleWheel = e => {
        if (firstVisit) {
            setFirstVisit(false);
        }
        if (e.deltaY > 0) {
            setProjectState(prevState => ({
                currentIndex: prevState.currentIndex < projects.length - 1 ? prevState.currentIndex + 1 : projects.length - 1,
                prevIndex: prevState.currentIndex
            }));
        } else if (e.deltaY < 0) {
            setProjectState(prevState => ({
                currentIndex: prevState.currentIndex >= 1 ? prevState.currentIndex - 1 : 0,
                prevIndex: prevState.currentIndex
            }));
        }
    }
    const { currentIndex, prevIndex } = projectState;
    return (
        <MainContainer>
            {currentIndex >= 1 ? (
                <IconContainer up={true}>
                    <FontAwesomeIcon
                        onClick={handleClickUp}
                        size="2x"
                        icon={['fas', 'caret-up']}
                    />
                </IconContainer>
            ) : null}
            {currentIndex < projects.length - 1 ? (
                <IconContainer up={false}>
                    <FontAwesomeIcon
                        onClick={handleClickDown}
                        size="2x"
                        icon={['fas', 'caret-down']}
                    />
                </IconContainer>
            ) : null}
            <Project
                {...projects[currentIndex]}
                prevIndex={prevIndex}
                theme={theme}
                currentIndex={currentIndex}
                projects={projects}
                duration={duration}
                firstVisit={firstVisit}
                mobile={mobile} />
            {!mobile ? <Transition
                items={mouseActive}
                from={{ opacity: 0, bottom: 30 }}
                enter={{ opacity: 1, bottom: 60 }}
                leave={{ opacity: 0, bottom: 30 }}>
                {mouseActive => mouseActive && (props => <ScrollMessage style={{ ...props }}>
                    <p>Scroll or click arrow to view Projects</p>
                    <FontAwesomeIcon
                        size="2x"
                        icon={['fas', 'caret-down']}
                        style={{
                            position: 'absolute',
                            bottom: -15,
                            color: 'white'
                        }} />
                </ScrollMessage>)}
                    </Transition> : null }
            <ProgressBar
                currentIndex={currentIndex}
                projectsLength={projects.length}
                primaryColor={theme[1]} />
        </MainContainer>
    );
}

function mapStateToProps({ theme, mobile }) {
    return { theme, mobile }
}
export default connect(mapStateToProps)(Code);