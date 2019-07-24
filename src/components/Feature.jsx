import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//components
import SocialButton from './SocialButton.jsx';
import ContactModal from './ContactModal.jsx';

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
    box-shadow: 5px 5px #FFF;
    z-index: 10;
`;

const FeatureButton = styled.button`
    padding: 5px 15px;
    border-radius: 5px;
    background: white;
    color: #666;
    border: none;
    margin: 10px 5px;
`;

const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
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
const socialLinks = [
    { name: 'github', link: 'https://github.com/somberSomni' },
    { name: 'vimeo-v', link: 'https://vimeo.com/kartune' }];

export default function Feature() {
    const [open, setOpen] = useState(false);
    return (
        <FeatureContainer>
            <ContactModal setOpen={setOpen} open={open} />
            <div>
                <h3>
                    Somber
                    <br />
                    Somni
                </h3>
                <p>A self taught programmer, artist and mathematician</p>
                <ButtonContainer>
                    <FeatureButton onClick={() => { setOpen(true) }}>
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
                            key={social.name}
                            social={social.name}
                            link={social.link} />)}
                </SocialContainer>
            </div>
        </FeatureContainer>
    );
}