import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Capsule from './Capsule.jsx';
const ProjectContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const HeaderImg = styled.div`
    position: relative;
    background: url(${props => props.src});
    background-size: cover;
    background-position: center;
    width: 100%;
    height:  100%;
`;

const Menu = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(${props => props.primaryColor}, 0.6);
    color: white;
    width: 100%;
    height: 100%;
`;

const Info = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 300px;
    min-width: 200px;
    height: 300px;
    border: 4px solid white;
    border-radius: 25px;
    z-index: 90;
    padding: 25px;
`;

const CapsuleContainer = styled.div`
    width: 100px;
`;

const Capsules = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    color: ${props => props.primaryColor || 'black'}
`;

const CapButton = styled.button`
    background: rgba(0,0,0,0);
    border-radius: 25px;
    border: 2px solid white;
    color: white;
    margin: 5px;
    padding: 5px 10px;
`;

const MobileMarker = styled.div`
    margin-top: 10px;
`;

const Counter = styled.div`
    position: absolute;
    top: 100px;
    left: 25px;
    z-index: 95;
    color: white;
`;

export default function Project({ currentIndex, desc, headerImg, tagline, title, theme, type, websiteLink }) {

    return (
        <ProjectContainer>
            <Counter>
                <h1>{currentIndex + 1}.</h1>
            </Counter>
            <FontAwesomeIcon
                size="2x"
                icon={['fas', 'chevron-up']}
                style={{
                    position: "absolute",
                    top: 100,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 95,
                    color: "white"
                }} />
            <FontAwesomeIcon
                size="2x"
                icon={['fas', 'chevron-down']}
                style={{
                    position: "absolute",
                    bottom: 50,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 95,
                    color: "white"
                }} />
            <HeaderImg src={headerImg}>
                <Menu primaryColor={"27,27,58" /*replicates theme[3] */}>
                    <Info>
                        <h1 style={{
                            fontFamily: "Beth Ellen",
                            marginBottom: -10
                        }}>{title}</h1>
                        <p style={{ padding: "0px 25px" }}>{tagline}</p>
                        <Capsules primaryColor={theme[3]}>
                            {Array.isArray(type) ? type.map((each, i) =>
                                (<CapsuleContainer key={each}>
                                    <Capsule
                                        color='white'
                                        i={i}
                                        show={true}
                                        label={each} />
                                </CapsuleContainer>)) :
                                <CapsuleContainer>
                                    <Capsule
                                        i={0}
                                        color='white'
                                        show={true}
                                        label={type} />
                                </CapsuleContainer>
                            }
                        </Capsules>
                        <a href={websiteLink}>
                            <CapButton> Visit Website </CapButton>
                        </a>
                        <MobileMarker>
                            <FontAwesomeIcon size='2x' icon={['fal', 'mobile-alt']} />
                            <h6 style={{
                                marginTop: 2
                            }}>Mobile Friendly</h6>
                        </MobileMarker>
                    </Info>
                </Menu>
            </HeaderImg>
        </ProjectContainer>
    );
}

