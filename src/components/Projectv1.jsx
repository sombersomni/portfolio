import React, { useState } from 'react';
import styled from 'styled-components';
import Capsule from './Capsule.jsx';
//import { Transition } from 'react-spring/renderprops'

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
    transition: transform 500ms, height 500ms;
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
            <p style={{
                padding: '0px 10px',
                marginTop: -10,
                overflowY: 'hidden'
            }}>{tagline}
            </p>
        </ProjectContainer>
    )
}

export default Project;