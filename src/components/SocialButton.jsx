import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconContainer = styled.div`
    margin: 0px 10px;
`;

export default function SocialButton({social, link}) {
    return (
        <IconContainer>
            <a href={link}>
                <FontAwesomeIcon key={social} icon={['fab', social]} />
            </a>
        </IconContainer>
    )
}