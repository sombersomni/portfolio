import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
    width: 100%;
    height: 50px;
    max-height: 75px;
    background: white;
    &:hover {
        cursor: pointer;
    }
`;
function Project({title, chosen}){
    return (
        <ProjectContainer>
            <h4>{title}</h4>
        </ProjectContainer>
    )
}

export default Project;