import React from 'react';
import SkillNav from './SkillNav.jsx';
import SkillFeature from './SkillFeature.jsx';
import styled from 'styled-components';

const SkillContainer = styled.div`
    width: 100vw;
    height: 90vh;
    background: #CCC;
`;

const skill = {
    title: 'UI/UX Developer',
    icon: 'laptop-code',

}
export default function Skills() {
    return (
        <SkillContainer>
            <SkillNav />
            <SkillFeature {...skill} />
        </SkillContainer>
    )
}