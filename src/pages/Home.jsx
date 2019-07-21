import React from 'react';
import styled from 'styled-components';

//components
import Feature from '../components/Feature.jsx';
import LogoSlider from '../components/LogoSlider.jsx';
import Skills from '../components/Skills.jsx';

const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;
export default function Home() {
    return (
        <HomeContainer>
          <div style={{ width: '100vw', height: '100vh'}}>
            <Feature />
          </div>
          <Skills />
          <LogoSlider />
        </HomeContainer>
    );
}