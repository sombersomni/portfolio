import React from 'react';
import styled from 'styled-components';

//components
import Feature from '../components/Feature.jsx';
import LogoSlider from '../components/LogoSlider.jsx';
import Skills from '../components/Skills.jsx';

const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0px;
`;

const FeatureContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #222;
`;
export default function Home() {
    return (
        <HomeContainer>
          <FeatureContainer>
            <Feature />
          </FeatureContainer>
          <Skills />
          <LogoSlider />
        </HomeContainer>
    );
}