import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { debounce } from 'lodash';
//components
import Project from '../components/Projectv2.jsx';
import projects from '../data/projects';
import { displayMessage } from '../components/animations/advanced';
//import DropSelect from '../components/DropSelect.jsx';


const MainContainer = styled.div`
    margin: 0;
    &::-webkit-scrollbar { 
        display: none; 
    }
`;

// const IconContainer = styled.div`
//     position: absolute;
//     ${props => props.up ? "top: 100px" : "bottom: 50px"  };
//     left: 50%;
//     transform: translateX(-50%), scale(1);
//     z-index: 95;
//     color: white;
//     opacity: 1;
//     cursor: pointer;
//     &:hover {
//         transform: scale(1.1);
//         opacity: 0.8;
//     }
// `;

const ScrollMessage = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 95;
    opacity: 1;
    cursor: pointer;
    background: white;
    border-radius: 25px;
    padding: 0px 10px;
    animation: 5000ms ${displayMessage()} ease-in-out both; 
`;

function Code({ mobile, theme }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [firstVisit, setFirstVisit] = useState(true);
    const [prevTimeout, setPrevTimeout] = useState(null);
    const [mouseActive, setMouseActive] = useState(false);
    const duration = 4000;
    useEffect(() => {
        const dWheel = debounce(handleWheel, duration, { maxWait: duration + 1000, leading: true, trailing: false });
        const dHandleMouseMove = debounce(handleMouseMove, 500);
        window.addEventListener('wheel', dWheel);
        window.addEventListener('mousemove', dHandleMouseMove);
        return () => {
            window.removeEventListener('wheel', dWheel);
            window.removeEventListener('mousemove', dHandleMouseMove);
        }
    }, []);
    const handleMouseMove = e => {
        const x = e.clientX;
        const y = e.clientY;
        console.log("Coords :", x,y);
    }
    const handleWheel = e => {
        console.log(e);
        if(prevTimeout) {
            clearTimeout(prevTimeout);
        }
        if(firstVisit) {
            setFirstVisit(false);
        }
        let prevIndexTimeout;
        if (e.deltaY > 0) {
            prevIndexTimeout = setTimeout(() => setPrevIndex(pIndex => pIndex < projects.length - 1 ? pIndex + 1 : projects.length - 1), duration - duration / 4);
            setPrevTimeout(prevIndexTimeout);
            setCurrentIndex(pIndex => pIndex < projects.length - 1 ? pIndex + 1 : projects.length - 1);
        } else if (e.deltaY < 0) {
            prevIndexTimeout = setTimeout(() => setPrevIndex(pIndex => pIndex >= 1 ? pIndex - 1 : 0), duration - duration / 4);
            setPrevTimeout(prevIndexTimeout);
            setCurrentIndex(pIndex => pIndex >= 1 ? pIndex - 1 : 0);
        }
    }
    return (
        <MainContainer>
            {/* {currentIndex >= 1 ? (
                <IconContainer up={true}>
                    <FontAwesomeIcon
                        onClick={e => setCurrentIndex(prevIndex => prevIndex >= 1 ? prevIndex - 1 : 0)}
                        size="2x"
                        icon={['fas', 'chevron-up']}
                    />
                </IconContainer>
            ) : null}
            {currentIndex <= projects.length - 1 ? (
                <IconContainer up={false}>
                    <FontAwesomeIcon
                        onClick={e => setCurrentIndex(prevIndex => prevIndex < projects.length - 1 ? prevIndex + 1 : projects.length - 1)}
                        size="2x"
                        icon={['fas', 'chevron-down']}
                    />
                </IconContainer>
            ) : null} */}
            <Project
                {...projects[currentIndex]}
                prevIndex={prevIndex}
                theme={theme}
                currentIndex={currentIndex} 
                projects={projects}
                duration={duration}
                firstVisit={firstVisit} />
            <ScrollMessage>
                <p>Scroll to view Projects</p>
                <FontAwesomeIcon 
                    size="2x" 
                    icon={['fas', 'caret-down']}
                    style={{
                        position: 'absolute',
                        bottom: -18,
                        color: 'white'
                    }} />
            </ScrollMessage>
        </MainContainer>
    );
}

function mapStateToProps({ theme, mobile }) {
    return { theme, mobile }
}
export default connect(mapStateToProps)(Code);