import React from 'react';
import styled from 'styled-components';
//components 
import Capsule from './Capsule.jsx';

const SkillNavContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 50px;
`;

const skills = ['ui/ux developer', 'backend developer', 'data science', 'animation']
export default function SkillNav() {
    return (
        <SkillNavContainer>
            {skills.map(skill => <Capsule key={skill} label={skill} show={false}/>)}
        </SkillNavContainer>
    )
}