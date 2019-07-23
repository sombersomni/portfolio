import React from 'react';
import styled from 'styled-components';
//components 
import Capsule from './Capsule.jsx';

const SkillNavContainer = styled.div`
    width: 100vw;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
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