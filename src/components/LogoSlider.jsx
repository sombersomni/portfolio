import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Trail } from 'react-spring/renderprops'
// import { useSpring, animated, interpolate } from 'react-spring'

const SlideContainer = styled.div`
    width: 100vw;
    margin: 0px 0px 20px 0px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const LogoSliderContainer = styled.div`
    width: 80%;
    min-height: 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

function LogoSlider({ brands, mobile, screenWidth, scrollYPos, duration }) {
    const width = 200;
    const [elReached, setElReached] = useState(false);
    const slideRef = useRef(null);
    // const time = (duration || 4000);
    // const { o, x } = useSpring({
    //     config: { duration: 1000, delay: 3000 },
    //     from: { o: 0, x: 0 },
    //     reset: true,
    //     o: 1,
    //     x: -width
    // });

    useEffect(() => {
        console.log(slideRef.current.offsetTop, scrollYPos);
        if (slideRef.current.offsetTop - 400 <= scrollYPos && scrollYPos !== 0) {
            setElReached(true);
        }
    }, [scrollYPos])
    return (
        <SlideContainer ref={slideRef}>
            <h1 >Brands I've Worked with</h1>
            <LogoSliderContainer>
                {elReached ? <Trail
                    items={brands}
                    keys={brand => brand}
                    from={{ transform: 'translate3d(0,-40px,0)', opacity: 0}}
                    to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}>
                    {brand => props =>  (<img
                        src={brand}
                        alt={brand}
                        width={width}
                        height={'auto'}
                        style={props}
                    />)}
                </Trail> : null}
            </LogoSliderContainer>

        </SlideContainer >
    )
}

function mapStateToProps({ mobile, screenWidth, scrollYPos }) {
    return { mobile, screenWidth, scrollYPos }
}
export default connect(mapStateToProps)(LogoSlider)