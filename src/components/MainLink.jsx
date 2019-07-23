import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const activeStyle = {
    color: 'red'
}

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: 0px 10px;
    padding: 5px;
    transition: opacity 1s;
    opacity: 1;
    &:hover {
        opacity: 0.5
    }
`;

const defaultStyle = {
    color: '#222'
}

const hoverStyle = {
    color: 'blue'
}

export default function MainLink({ name, icon }) {
    return (
        <LinkContainer>
                <NavLink to={`/${name === 'home' ? '' : name}`} activeStyle={activeStyle}>
                    <div>
                        <FontAwesomeIcon icon={['far', icon]} />
                        <div>{name}</div>
                    </div>
                </NavLink>
        </LinkContainer>
    );
}