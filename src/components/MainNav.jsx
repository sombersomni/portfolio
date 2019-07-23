import React from 'react';
import styled from 'styled-components';
import MainLink from './MainLink.jsx';

const navLinks = [
  { name: 'home', icon: 'home-alt'},
  {name: 'code', icon: 'brackets-curly'},
  { name: 'art', icon: 'pencil-alt'},
  { name: 'contact', icon: 'envelope'}]

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  background: yellow;
  position: fixed;
  text-align: center;
  justify-content: center;
  margin: 0;
  height: 80px;
  z-index: 99;
`;

export default function MainNav() {
  return (
    <HeaderContainer>
      <NavContainer>
        { navLinks.map(link => 
          <MainLink 
            key={link.name} 
            name={link.name} 
            icon={link.icon} />
        )}
      </NavContainer>
    </HeaderContainer>
    );
}