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

export default function SkillNav({setChoice, choice, skills}) {
    return (
            <SkillNavContainer>
                {skills.map((skill, i) => <Capsule key={skill + i} label={skill} show={false} setChoice={() => {setChoice(i)}} selected={i === choice}/>)}
            </SkillNavContainer>
    )
}