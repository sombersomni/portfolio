import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//components
import SocialButton from './SocialButton.jsx';

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
    margin: 10px;
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
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    &:hover {
        cursor: pointer;
    }
`;
const socialLinks = [
    { name: 'github', link: 'https://github.com/somberSomni' },
    { name: 'vimeo-v', link: 'https://vimeo.com/kartune' }];

export default function Feature() {
    return (
        <FeatureContainer>
            <div>
                <h3>
                    Somber
                    <br />
                    Somni
                </h3>
                <p>A self taught programmer, artist and mathematician</p>
                <ButtonContainer>
                    <FeatureButton>
                        Hire Me
                </FeatureButton>
                    <Resume>
                        <FontAwesomeIcon size='2x' icon={['fal', 'file-pdf']} />
                        <p style={{ fontSize: '0.8em' }}>Download Resume PDF</p>
                    </Resume>
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