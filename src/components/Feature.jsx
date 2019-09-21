import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//components
import SocialButton from './SocialButton.jsx';
import ContactModal from './ContactModal.jsx';
//other
import socials from '../config/socials';
import data from '../data/about';
const { socialLinks, SocialContainer } = socials;
const FeatureContainer = styled.div`
    width: 250px;
    padding: 25px;
    background: yellow;
    position: absolute;
    border-radius: 10%;
    top: 50%;
    left: 50%;
    margin-top: 50px;
    transform: translate(-50%,-50%);
    box-shadow: 5px 5px ${props => props.primaryColor || 'white'};
    z-index: 10;
`;

const FeatureButton = styled.a`
    padding: 5px 15px;
    border-radius: 5px;
    background: ${props => props.primaryColor || 'white'};
    border: none;
    margin: 10px 5px;
    &:hover {
        box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.2);
    }
`;

const Resume = styled.div`
    width: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: opacity 1s;
    opacity: 1;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const { email, subject } = data;

function Feature({ theme, mobile }) {
    const [open, setOpen] = useState(false);
    return (
        <FeatureContainer primaryColor={theme[1]}>
            <InteractiveBG />
            <ContactModal theme={theme} mobile={mobile} setOpen={setOpen} open={open} />
            <div>
                <h3>
                    <span style={{ color: theme[1] }}>S</span>omber
                    <br />
                    <span style={{ color: theme[1] }}>S</span>omni
                </h3>
                <p>A self taught programmer, artist and mathematician</p>
                <ButtonContainer>
                    <FeatureButton
                        href={`mailto:${email}?subject=${subject}`}
                        primaryColor={theme[1]}>
                        Hire Me
                    </FeatureButton>
                    <a href="#">
                        <Resume>
                            <FontAwesomeIcon size='2x' icon={['fal', 'file-pdf']} />
                            <p style={{ fontSize: '0.8em' }}>Download Resume PDF</p>
                        </Resume>
                    </a>

                </ButtonContainer>
                <SocialContainer>
                    {socialLinks.map(social =>
                        <SocialButton
                            color={theme[3]}
                            key={social.name}
                            social={social.name}
                            link={social.link} />)}
                </SocialContainer>
            </div>
        </FeatureContainer>
    );
}
function mapStateToProps({ theme, mobile }) {
    return {
        theme,
        mobile
    }
}
export default connect(mapStateToProps)(Feature)