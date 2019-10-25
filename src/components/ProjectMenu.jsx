import React from 'react';
import styled from 'styled-components';
import Capsule from './Capsule.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuShow, menuMove } from './animations/advanced';
import { fadeOut, nothing } from './animations/basic';

const MainContainer = styled.div`
position: absolute;
width: 100%;
height: 100%;
animation: ${props => props.menuShow ? props.duration : props.duration / 4}ms ${props => props.firstTime ? nothing : (props.menuShow ? menuMove : nothing)} ease-in-out both
`;

const Menu = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
color: white;
width: 100%;
height: 100%;
background: rgba(${props => props.primaryColor}, 0.6);
z-index: ${props => props.old ? 80 : 81};
animation: ${props => props.menuShow ? props.duration : props.duration / 4}ms ${props => props.firstTime ? nothing : (props.menuShow ? menuShow(props.primaryColor, 0.6) : fadeOut)} ease-in-out both
transition: background 1s;
`;

const Info = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${props => props.mobile ? "200px" : "300px"};
    min-width: 200px;
    height: ${props => props.mobile ? "200px" : "300px"};
    font-size: ${props => props.mobile ? "0.8em" : "1em"};
    margin-top: ${props => props.mobile ? -5 : 0};
    min-height: 200px;
    border: 4px solid white;
    border-radius: 50%;
    z-index: 90;
    padding: 25px;
    background: rgba(${props => props.primaryColor}, 0);
    cursor: default;
    transition: background 1s, border 1s;;
    &:hover {
        cursor: pointer;
        border: 4px solid rgba(0,0,0,0);
        background: rgba(${props => props.primaryColor}, 1);
    }
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

const HeaderImg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: url(${props => props.src});
    background-size: cover;
    background-position: center;
    width: 100%;
    height:  100%;
    z-index: ${props => props.old ? 10 : 11};
`;
export default function ProjectMenu({ headerImg, primaryColor, tagline, websiteLink, type, theme, title, isMobileFriendly, old = false, menuShow = true, duration, firstTime, mobile }) {
    const color = "27,27,58";
    return (
        <MainContainer
            duration={duration}
            firstTime={firstTime}
            menuShow={menuShow}>
            <Menu
                firstTime={firstTime}
                duration={duration}
                menuShow={menuShow}
                old={old}
                primaryColor={color /*replicates theme[3] */}
            >
                <Info
                    mobile={mobile}
                    primaryColor={color /*replicates theme[3] */}>
                    <h1 style={{
                        fontFamily: "Beth Ellen",
                        marginBottom: -10
                    }}>{title}</h1>
                    <p style={{ padding: "0px 25px" }}>{tagline}</p>
                    <Capsules primaryColor={primaryColor}>
                        {Array.isArray(type) ? type.map((each, i) =>
                            (<CapsuleContainer key={each}>
                                <Capsule
                                    color='white'
                                    i={i}
                                    theme={theme}
                                    show={true}
                                    label={each} />
                            </CapsuleContainer>)) :
                            <CapsuleContainer>
                                <Capsule
                                    i={0}
                                    color='white'
                                    theme={theme}
                                    show={true}
                                    label={type} />
                            </CapsuleContainer>
                        }
                    </Capsules>
                    <a href={websiteLink}>
                        <CapButton> Visit Website </CapButton>
                    </a>
                    {isMobileFriendly ? <MobileMarker>
                        <FontAwesomeIcon size='2x' icon={['fal', 'mobile-alt']} />
                        <h6 style={{
                            marginTop: 2
                        }}>Mobile Friendly</h6>
                    </MobileMarker> : null}
                </Info>
            </Menu>
            <HeaderImg 
                old={old}
                src={headerImg} />
        </MainContainer>
    )
}