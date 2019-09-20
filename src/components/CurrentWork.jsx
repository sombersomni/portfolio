import React, { useState } from 'react';
import ArrowButton from './ArrowButton.jsx';
import styled from 'styled-components';
import { OutlineCapsule } from './Capsule.jsx';


const WorkContainer = styled.div`
    width:  ${props => props.mobile ? '100%' : '75%'};
    height: ${props => props.mobile ? '60vh' : '100vh'};
    position: ${props => props.mobile ? "-webkit-sticky" : "relative"};
    position:  ${props => props.mobile ? "sticky" : "relative"};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: yellow;
`;

const WorkTitle = styled.div`
    width:  ${props => props.mobile ? '100%' : '25%'};
    min-width: 250px;
    background: white;
`;

const WorkHeader = styled.div`
    width: ${props => props.mobile ? '100%' : '75%'};
    height: 100%;
    background: url(${props => props.bg}) no-repeat;
    background-position: ${props => props.bgpos || 'center'};
    background-size: cover;
`;

const Work = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${props => props.mobile ? 'column' : 'row'};
`;

const ModalContainer = styled.div`
    background: rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: opacity 1s;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
`;

export default function CurrentWork({ bgpos, desc, title, headerImg, tagline, websiteLink, mobile}) {
    return (
        <WorkContainer mobile={mobile}>
            <Work mobile={mobile}>
                <WorkTitle mobile={mobile}>
                    <h1>{title}</h1>
                    {!mobile ?
                    (<div>
                        <p style={{ fontWeight: 'bold', padding: 25 }}>{tagline}</p>
                        <p style={{ padding: 25 }}>{desc}</p>
                    </div>) 
                    : null}
                </WorkTitle>
                <WorkHeader
                    bg={headerImg}
                    bgpos={bgpos}
                    mobile={mobile}>
                    <ModalContainer>
                        <OutlineCapsule
                            label='Visit Website'
                            link={websiteLink} />
                    </ModalContainer>
                </WorkHeader>
            </Work>
        </WorkContainer>
    );
}