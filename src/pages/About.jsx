import React from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
//imgs
import me from '../imgs/personal/me.png';
//animation
import { fadeIn } from '../components/animations/basic';
//data
import data from '../data/about';

const expand = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 90vw;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: ${props => props.secondaryColor || 'yellow'};
    min-height: 100vh;
    width: 100vw;
`;
const AboutContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: ${props => props.mobile ? 'column': 'row'};
    jusity-content: center;
    align-items: flex-start;
    min-height: 500px;
    height: auto;

    min-width: 350px;
    width: 90vw;
    background: ${props => props.primaryColor || 'black'};
    box-shadow: 4px 4px 8px ${props => props.primaryColor || 'black'}
    border-radius: 0px 0px 25px 0px;
    animation: ${props => props.time || 1000}ms ${expand} cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;
const Info = styled.div`
    opacity: 0;
    height: inherit;
    color: white;
    padding: 10px 40px;
    width: ${props => props.mobile ? '85%' : '60%'};
    animation: ${props => props.time || 1000}ms ${props => props.delay || 1000}ms ${fadeIn} ease-out both;
    h1 {
        color: ${props => props.secondaryColor || "white"};
    }
    p {
        text-align: justify;
        text-indent: 1em;
        &:first-letter {
            color: ${props => props.secondaryColor || "yellow"};
            font-size: 2rem;
        }
    }
`;
const Profile = styled.div`
    width: ${props => props.mobile ? "100%" : "40%"};
    max-width: 90vw;
    min-height: 500px;
    height: ${props => props.mobile ? "600px" : "100vh"}
`;

const Pic = styled.div`
    background: url(${props => props.pic}) no-repeat;
    background-size: cover;
    background-position-x: center;
    width: 100%;
    height: 100%;
    animation: ${props => props.time || 1000}ms ${fadeIn} ease-out both;
`;

const Contact = styled.div`
    a {
        color: ${props => props.secondaryColor || "white"};
    }
`;

const { bio, altEmail, email, subject } = data;

function About({ theme, screenWidth }) {
    const expandTime = 1000;
    return (
        <Container secondaryColor={theme[5]}>
            <AboutContainer
             primaryColor={theme[3]} 
             time={expandTime}
             mobile={screenWidth <= 800}>
                <Profile mobile={screenWidth <= 800}>
                    <Pic 
                        pic={me} 
                        time={1000} />
                </Profile>
                <Info 
                    delay={expandTime} 
                    time={1000}
                    secondaryColor={theme[5]}
                    mobile={screenWidth <= 800}>
                    <h1>Somber Somni</h1>
                    <h4>Xavier Palin</h4>
                    <p>{bio}</p>
                    <Contact secondaryColor={theme[5]}>
                        <h4>For serious inqueries, email me at : <a href={`mailto:${email}?subject=${subject}`}>
                            {email}</a> or <a href={`mailto:${altEmail}?subject=${subject}`}>
                            {altEmail}</a></h4>
                    </Contact>
                </Info>
            </AboutContainer>
        </Container>
    )
}

function mapStateToProps({ theme, mobile, screenWidth }) {
    return {
        theme,
        screenWidth
    }
}
export default connect(mapStateToProps)(About)