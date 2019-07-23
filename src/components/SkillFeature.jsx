import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

//components
import Capsule from './Capsule.jsx';

const SkillFeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Description = styled.p`
    padding: 0px 50px;
    text-align: justify;
    text-indent: 1em;
    &:first-letter {
        font-size: 2em;
    }
`;

const SkillSets = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: auto;
    padding: 15px 50px 0px 50px;
`;

export default function SkillFeature({ title, icon, description, skillsets }) {
    return (
        <SkillFeatureContainer>
            <h1>{title}</h1>
            <FontAwesomeIcon size='8x' icon={['far', icon]} />
            <SkillSets>
                {skillsets.map(skill => <Capsule label={skill} />)}
            </SkillSets>
            <Description>{description}</Description>
        </SkillFeatureContainer>
    )
}