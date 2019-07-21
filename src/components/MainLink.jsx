import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const activeStyle = {
    opacity: 0.9,
    background: 'grey'
}

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: 0px 10px;
    padding: 5px;
`;

const defaultStyle = {
    color: '#222'
}

const hoverStyle = {
    color: 'blue'
}
export default function MainLink({ name, icon }) {
    const [active, setActive] = useState({...defaultStyle, transition: 'color 1s' });
    return (
        <div 
            onMouseEnter={() => { setActive(hoverStyle) }}
            onMouseLeave={() => { setActive({...defaultStyle, transition: 'color 1s' }) }}>
            <LinkContainer>
                <div style={active}>
                    <NavLink to={`/${name === 'home' ? '' : name}`} activeStyle={activeStyle}>
                        <div>
                            <FontAwesomeIcon icon={['far', icon]} />
                            <div>{name}</div>
                        </div>
                    </NavLink>
                </div>
            </LinkContainer>
        </div>
    );
}