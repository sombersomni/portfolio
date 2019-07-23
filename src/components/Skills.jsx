import React from 'react';
import SkillNav from './SkillNav.jsx';
import SkillFeature from './SkillFeature.jsx';
import styled from 'styled-components';

const SkillContainer = styled.div`
    width: 100vw;
    min-height: 90vh;
    height: auto;
    background: #CCC;
`;

const skill = {
    title: 'UI/UX Developer',
    icon: 'laptop-code',
    description: 'Vestibulum dignissim massa semper lacus lacinia, ut consectetur leo ullamcorper. Mauris et consequat urna. Integer ornare, lacus sit amet blandit sodales, ante velit faucibus mauris, non dignissim elit mi nec tellus. Vivamus sit amet maximus dui, nec porta nisi. Pellentesque id imperdiet lectus, a posuere augue. Integer auctor odio et finibus faucibus. Vivamus ut rhoncus magna. Nam fermentum, nulla et condimentum posuere, felis sapien laoreet odio, vitae lacinia libero nunc quis nisl. Aliquam quis dolor urna. Morbi vitae elementum lorem, vel egestas libero.',
    skillsets: [ 'html 5', 'CSS3', 'javascript', 'React', 'React Native', 'Vue', 'Mustache' ]

}
export default function Skills() {
    return (
        <SkillContainer>
            <SkillNav />
            <SkillFeature {...skill} />
        </SkillContainer>
    )
}