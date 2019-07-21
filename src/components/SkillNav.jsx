import React from 'react';
import styled from 'styled-components';
//components 
import Capsule from './Capsule.jsx';

const SkillNavContainer = styled.div`
    width: 80vw;
    background: white;
    display: flex;
    flex-direction: row;
    jusity-content: center;

`;

const skills = ['ui/ux developer', 'backend developer', 'data science', 'animation']
export default function SkillNav() {
    return (
        <div>
            <SkillNavContainer>
                {skills.map(skill => <Capsule key={skill} label={skill} />)}
            </SkillNavContainer>
        </div>
    )
}