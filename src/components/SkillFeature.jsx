import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const SkillFeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export default function SkillFeature({title, icon}) {
    return (
        <SkillFeatureContainer>
            <h1>{title}</h1>
            <FontAwesomeIcon size='8x' icon={['far', icon]} />
        </SkillFeatureContainer>
    )
}