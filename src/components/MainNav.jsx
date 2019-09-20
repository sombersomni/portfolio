import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MainLink from './MainLink.jsx';
import socials from '../config/socials';
import SocialButton from './SocialButton.jsx';
import { memberExpression } from '@babel/types';
const {socialLinks, SocialContainer} = socials;

const navLinks = [
  { name: 'home', icon: 'home-alt' },
  { name: 'code', icon: 'brackets-curly' },
  { name: 'about', icon: 'envelope' }]

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background: ${props => props.primaryColor || 'yellow'};
  position: fixed;
  text-align: center;
  justify-content: center;
  margin: 0;
  height: 80px;
  z-index: 99;
`;

function MainNav({ theme, mobile }) {
  return (
    <HeaderContainer primaryColor={theme[0]}>
      <NavContainer>
        {navLinks.map(link =>
          <MainLink
            theme={theme}
            key={link.name}
            name={link.name}
            icon={link.icon} />
        )}
      </NavContainer>
      <SocialContainer mobile={mobile} isNav={true}>
        {socialLinks.map(social =>
          <SocialButton
            color={theme[1]}
            key={social.name}
            social={social.name}
            link={social.link} />)}
      </SocialContainer>
    </HeaderContainer>
  );
}
function mapStateToProps({ theme, mobile }) {
  return {
    theme,
    mobile
  }
}
const ReduxMainNav = connect(mapStateToProps)(MainNav)
export default ReduxMainNav