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
import pdf from '../data/resume.PDF';
const { socialLinks, SocialContainer } = socials;
const FeatureContainer = styled.div`
    width: 250px;
    padding: 25px;
    position: absolute;
    background: rgba(70, 80, 125,0.4);
    border: 2px solid white;
    border-radius: 10%;
    color: white;
    top: 50%;
    left: 50%;
    margin-top: 50px;
    transform: translate(-50%,-50%);
    z-index: 10;
`;

const FeatureButton = styled.a`
    padding: 5px 15px;
    border-radius: 5px;
    background: ${props => props.primaryColor || 'white'};
    border: none;
    margin: 10px 5px;
    &:hover {
        box-shadow: 0px 0px 1px 1px rgba(70, 80, 125,0.2);
    }
`;

const Resume = styled.div`
    width: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
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
        <FeatureContainer primaryColor={theme[3]}>
            <ContactModal theme={theme} mobile={mobile} setOpen={setOpen} open={open} />
            <div>
                <h3>
                    SOMBER
                    <br />
                    SOMNI
                </h3>
                <p>A self taught programmer, artist and mathematician</p>
                <ButtonContainer>
                    <FeatureButton
                        href={`mailto:${email}?subject=${subject}`}
                        primaryColor={theme[1]}>
                        Hire Me
                    </FeatureButton>
                    <a href={pdf} download="Xavier Palin Coder Resume">
                        <Resume>
                            <FontAwesomeIcon size='2x' icon={['fal', 'file-pdf']} />
                            <p style={{ 
                                fontSize: '0.8em'}}>Download Resume PDF</p>
                        </Resume>
                    </a>

                </ButtonContainer>
                <SocialContainer>
                    {socialLinks.map(social =>
                        <SocialButton
                            color={'white'}
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