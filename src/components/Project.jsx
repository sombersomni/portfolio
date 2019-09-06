import React, { useState } from 'react';
import styled from 'styled-components';
import Capsule from './Capsule.jsx';
import { Transition } from 'react-spring/renderprops'

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 50px;
    padding: 5px 0px 10px 0px;
    background: ${props => props.chosen ? "#CCC" : "white"};
    box-shadow: ${props => props.chosen ? "2px 4px 4px blue" : "none"};
    transition: transform 500ms, height 1s;
    &:hover {
        cursor: pointer;
    }
`;

const ProjectTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

function Project({ tagline, title, type, setCurrentProject, i, chosen }) {
    const [showOverview, setShowOverview] = useState(false);
    return (
        <ProjectContainer
            chosen={chosen}
            onClick={() => setCurrentProject(i)}
            onMouseEnter={() => setShowOverview(true)}
            onMouseLeave={() => setShowOverview(false)}>
            <ProjectTitle>
                <h4>{title}</h4>
                <Capsule
                    show={true}
                    label={type} />

            </ProjectTitle>
            <Transition
                items={showOverview}
                config={{ duration: 500 }}
                from={{ opacity: 0, height: 0 }}
                enter={{ opacity: 1, height: 15 }}
                leave={{ opacity: 0, height: 0 }}>
                {showOverview => showOverview && (props =>
                    <p style={{ 
                        ...props,
                        padding: '0px 10px',
                        marginTop: -10 }}>{tagline}</p>
                )}
            </Transition>
        </ProjectContainer>
    )
}

export default Project;