import React, {useState} from 'react';
import { connect } from 'react-redux';
import SkillNav from './SkillNav.jsx';
import SkillFeature from './SkillFeature.jsx';
import styled from 'styled-components';
//data
import skill from '../data/skills.js';
const SkillContainer = styled.div`
    width: 100vw;
    min-height: 90vh;
    height: auto;
    background: ${props => props.primaryColor || 'yellow'}
    color: ${props => props.ternaryColor || 'black'};
`;

function Skills({theme, mobile}) {
    const [ choice, setChoice ] = useState(0);
    return (
        <SkillContainer primaryColor={theme[1]} ternaryColor={theme[3]}>
            <SkillNav theme={theme} setChoice={setChoice} choice={choice} skills={skill.map(s => s.title)}/>
            {skill.map((s, i) => i === choice ? <SkillFeature key={s.title} {...s} theme={theme} choice={choice}/> : null )}
        </SkillContainer>
    )
}
function mapStateToProps({theme, mobile}) {
    return { theme, mobile }
}
export default connect(mapStateToProps)(Skills)