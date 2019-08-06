import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const ArrowContainer = styled.div`
    width: 100px;
`;
export default function ArrowButton({label}) {
    return (
        <ArrowContainer>
            <div style={{ textTransform: 'uppercase'}}>
                {label}
            </div>
            <FontAwesomeIcon size='2x' icon={['fas', 'chevron-down']} />
        </ArrowContainer>
    );
}