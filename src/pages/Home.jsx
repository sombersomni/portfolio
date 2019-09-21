import React from 'react';

//components
import Feature from '../components/Feature.jsx';
import LogoSlider from '../components/LogoSlider.jsx';
import Skills from '../components/Skills.jsx';
import BioFooter from '../components/BioFooter.jsx';
import {Container, FeatureContainer} from '../components/Containers.jsx';
import InteractiveBG from '../components/InteractiveBG.jsx';
//images 
import cutLogo from '../imgs/brands/cut-logo.png';
import hihoLogo from '../imgs/brands/hiho-logo.png';
import viceLogo from '../imgs/brands/vice-logo.png';
import empireLogo from '../imgs/brands/empire-logo.jpg';
import golfLogo from '../imgs/brands/golf-logo.jpg';
import avatar from '../imgs/personal/profile-toon.jpg';

const brandLogos = [cutLogo, hihoLogo, viceLogo, golfLogo, empireLogo];
const desc = `As a self taught programmer, artist and mathematician, 
I firmly believe that if you are curious enough, you can learn 
anything the world has to offer you. In practice, nobody is exempt. 
Over the years I have accumulated a deep understanding of vast subjects 
in order to compound upon existing skill-sets and discover new ways of 
viewing a problem that some may deem unsolvable.`;

export default function Home() {
    return (
        <Container>
          <FeatureContainer style={{ overflow: "hidden" }}>
            {/* <Feature /> */}
            <InteractiveBG />
          </FeatureContainer>
          <Skills />
          <LogoSlider brands={brandLogos} />
          <BioFooter 
            description={desc}
            src={avatar}/>
        </Container>
    );
}