import React, {useState} from 'react';
import SkillNav from './SkillNav.jsx';
import SkillFeature from './SkillFeature.jsx';
import styled from 'styled-components';

const SkillContainer = styled.div`
    width: 100vw;
    min-height: 90vh;
    height: auto;
    background: #111;
    color: white;
`;

const skill = [
    {
        title: 'UI/UX Developer',
        icon: 'laptop-code',
        description: 'Vestibulum dignissim massa semper lacus lacinia, ut consectetur leo ullamcorper. Mauris et consequat urna. Integer ornare, lacus sit amet blandit sodales, ante velit faucibus mauris, non dignissim elit mi nec tellus. Vivamus sit amet maximus dui, nec porta nisi. Pellentesque id imperdiet lectus, a posuere augue. Integer auctor odio et finibus faucibus. Vivamus ut rhoncus magna. Nam fermentum, nulla et condimentum posuere, felis sapien laoreet odio, vitae lacinia libero nunc quis nisl. Aliquam quis dolor urna. Morbi vitae elementum lorem, vel egestas libero.',
        skillsets: [ 'html 5', 'CSS3', 'javascript', 'React', 'React Native', 'Vue', 'Mustache', 'Redux']

    },
    {
        title: 'Backend Developer',
        icon: ['server', 'database'],
        description: 'Morbi luctus, nisl et lacinia dictum, ipsum leo molestie sem, et lobortis lectus est aliquet nisl. In hac habitasse platea dictumst. Ut commodo semper mi sit amet feugiat. Suspendisse vehicula, orci a malesuada cursus, urna magna commodo mi, eget lobortis mauris urna eget dolor. Ut volutpat nisi tortor, vitae iaculis eros bibendum et. Proin porttitor gravida nulla nec volutpat. Duis interdum placerat leo, eget bibendum felis bibendum eget. Quisque vitae mauris pretium sapien lobortis elementum in ac ex. In blandit porttitor odio iaculis dignissim. Etiam lacinia orci in imperdiet fringilla. Sed condimentum ac ex non rutrum. In commodo ullamcorper condimentum. Quisque quis convallis justo. Phasellus sit amet ultrices orci.',
        skillsets: [ 'NodeJS', 'Express', 'MongoDB', 'SQL', 'Python', 'GraphQL']

    },
    {
        title: 'Data Science',
        icon: ['chart-scatter', 'chart-pie'],
        description: 'Curabitur vel risus a diam fringilla venenatis. Sed sodales ligula sit amet diam commodo, vel condimentum felis laoreet. Donec ligula ipsum, dapibus ac nulla eu, luctus cursus urna. Nullam eros nunc, ultricies eget massa id, gravida ornare nulla. Nullam auctor purus vitae tellus interdum efficitur. Donec et nibh urna. Ut ac sem pulvinar, maximus ligula vitae, dignissim neque. Nunc aliquam arcu arcu, vel vulputate elit iaculis at. Etiam maximus libero eu massa fermentum congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        skillsets: [  ]

    },
    {
        title: 'animation',
        icon: 'laptop-code',
        description: 'Vestibulum dignissim massa semper lacus lacinia, ut consectetur leo ullamcorper. Mauris et consequat urna. Integer ornare, lacus sit amet blandit sodales, ante velit faucibus mauris, non dignissim elit mi nec tellus. Vivamus sit amet maximus dui, nec porta nisi. Pellentesque id imperdiet lectus, a posuere augue. Integer auctor odio et finibus faucibus. Vivamus ut rhoncus magna. Nam fermentum, nulla et condimentum posuere, felis sapien laoreet odio, vitae lacinia libero nunc quis nisl. Aliquam quis dolor urna. Morbi vitae elementum lorem, vel egestas libero.',
        skillsets: [ 'html 5', 'CSS3', 'javascript', 'React', 'React Native', 'Vue', 'Mustache' ]

    },
];
export default function Skills() {
    const [ choice, setChoice ] = useState(0);
    return (
        <SkillContainer>
            <SkillNav setChoice={setChoice} choice={choice} skills={skill.map(s => s.title)}/>
            <SkillFeature {...skill[choice]} />
        </SkillContainer>
    )
}