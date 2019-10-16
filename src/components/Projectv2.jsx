import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProjectMenu from './ProjectMenu.jsx';

const ProjectContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const HeaderImg = styled.div`
    position: relative;
    background: url(${props => props.src});
    background-size: cover;
    background-position: center;
    width: 100%;
    height:  100%;
`;

const Counter = styled.div`
    position: absolute;
    top: 100px;
    left: 25px;
    z-index: 95;
    color: white;
`;

export default function Project({ currentIndex, duration, headerImg, firstVisit, tagline, title, theme, type, websiteLink, isMobileFriendly, prevIndex, projects}) {
    console.log("prev: " + prevIndex, "current : " + currentIndex)
    return (
        <ProjectContainer>
            <Counter>
                <h1>{currentIndex + 1}.</h1>
            </Counter>
            <HeaderImg src={prevIndex != currentIndex ? projects[prevIndex].headerImg : headerImg}>
                { projects.map((proj, i) => i === prevIndex ? <ProjectMenu 
                 key={proj.title + i.toString()}
                {...proj}
                firstTime={firstVisit}
                old={true}
                duration={duration} 
                menuShow={false}/> : null) }
                { !firstVisit ? projects.map((proj, i) => i === currentIndex ? 
                <ProjectMenu 
                    firstVisit={currentIndex === 0}
                    key={title + i.toString()}
                    duration={duration}
                    tagline={tagline}
                    title={title}
                    type={type}
                    websiteLink={websiteLink}
                    primaryColor={theme[3]}
                    isMobileFriendly={isMobileFriendly}
                    old={false}
                    menuShow={true}
                     /> : null) : null}
            </HeaderImg>
        </ProjectContainer>
    );
}

