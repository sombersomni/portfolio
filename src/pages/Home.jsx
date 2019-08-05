import React from 'react';
import styled from 'styled-components';

//components
import Feature from '../components/Feature.jsx';
import LogoSlider from '../components/LogoSlider.jsx';
import Skills from '../components/Skills.jsx';
import BioFooter from '../components/BioFooter.jsx';
//images 
import cutLogo from '../imgs/cut-logo.png';
import hihoLogo from '../imgs/hiho-logo.png';
import viceLogo from '../imgs/vice-logo.png';
import empireLogo from '../imgs/empire-logo.jpg';
import golfLogo from '../imgs/golf-logo.jpg';
import avatar from '../imgs/profile-toon.jpg';

const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0px;
`;

const FeatureContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #ff0022;
`;
const brandLogos = [cutLogo, hihoLogo, viceLogo, golfLogo, empireLogo];
const desc = `As a self taught programmer, artist and mathematician, 
I firmly believe that if you are curious enough, you can learn 
anything the world has to offer you. In practice, nobody is exempt. 
Over the years I have accumulated a deep understanding of vast subjects 
in order to compound upon existing skill-sets and discover new ways of 
viewing a problem that some may deem unsolvable.`;

export default function Home() {
    return (
        <HomeContainer>
          <FeatureContainer>
            <Feature />
          </FeatureContainer>
          <Skills />
          <LogoSlider brands={brandLogos} />
          <BioFooter 
            description={desc}
            src={avatar}/>
        </HomeContainer>
    );
}