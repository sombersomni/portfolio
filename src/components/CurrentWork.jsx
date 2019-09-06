import React, {useState} from 'react';
import ArrowButton from './ArrowButton.jsx';
import styled from 'styled-components';
import {OutlineCapsule} from './Capsule.jsx';


const WorkContainer = styled.div`
    width: 75%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: yellow;
`;

const WorkTitle = styled.div`
    width: 25%;
    min-width: 250px;
    background: white;
`;

const WorkHeader = styled.div`
    width: 75%;
    background: url(${props => props.bg}) no-repeat;
    background-position: ${props => props.bgpos || 'center'};
    background-size: cover;
`;

const Work = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const ModalContainer = styled.div`
    background: rgba(0,0,0,0);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: background 1s;
    &:hover {
        background: rgba(0,0,0,0.5);
    }
`;

export default function CurrentWork({bgpos, desc, title, headerImg, tagline, websiteLink}) {
    return (
        <WorkContainer>
            <Work>
                <WorkTitle>
                    <h1>{title}</h1>
                    <p style={{ fontWeight: 'bold', padding: 25 }}>{tagline}</p>
                    <p style={{ padding: 25 } }>{desc}</p>
                </WorkTitle>
                <WorkHeader 
                    bg={headerImg}
                    bgpos={bgpos}>
                        <ModalContainer>
                            <OutlineCapsule 
                                label='Visit Website' 
                                target='_blank'
                                link={websiteLink}/>
                        </ModalContainer> 
                </WorkHeader>
                    
            </Work>
        </WorkContainer> 
    );
}