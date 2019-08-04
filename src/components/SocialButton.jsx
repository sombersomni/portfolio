import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconContainer = styled.div`
    margin: 0px 10px;
    opacity: 1;
    transition: opacity 1s;
    &:hover {
        opacity: 0.6
    }
`;

export default function SocialButton({social, link, theme}) {
    return (
        <IconContainer ternaryColor={theme[3]}>
            <a href={link}>
                <FontAwesomeIcon 
                key={social} 
                style={{ color: theme[3] }}
                icon={['fab', social]} />
            </a>
        </IconContainer>
    )
}