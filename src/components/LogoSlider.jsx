import React from 'react';
import styled from 'styled-components';
import cutLogo from '../imgs/cut-logo.png';
import hihoLogo from '../imgs/hiho-logo.png';

const SlideContainer = styled.div`
    width: 100vw;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;


const LogoSliderContainer = styled.div`
    width: 80%;
`;

const brandLogos = [cutLogo, hihoLogo];
export default function LogoSlider() {
    return (
        <SlideContainer>
            <h3>Brands I've Worked with</h3>
            <LogoSliderContainer>
                {brandLogos.map(brand => 
                <img 
                    key={brand} 
                    src={brand} 
                    alt={brand} />)}
            </LogoSliderContainer>
        </SlideContainer>
    )
}