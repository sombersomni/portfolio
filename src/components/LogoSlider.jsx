import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const SlideContainer = styled.div`
    width: 100vw;
    margin: 0px 0px 20px 0px;
    display: flex;
    flex-direction: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;


const LogoSliderContainer = styled.div`
    width: 80%;
`;

function LogoSlider({ brands, mobile }) {
    return (
        <SlideContainer>
            <h4>Brands I've Worked with</h4>
            <LogoSliderContainer>
                {brands.map(brand =>
                    <img
                        key={brand}
                        src={brand}
                        alt={brand}
                        height={mobile ? 100 : 150} />)}
            </LogoSliderContainer>
        </SlideContainer>
    )
}

function mapStateToProps({ mobile }) {
    return { mobile }
}
export default connect(mapStateToProps)(LogoSlider)