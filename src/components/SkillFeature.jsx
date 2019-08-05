import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';
//external scripts
import startPlane from '../scripts/plane';

//components
import Capsule from './Capsule.jsx';
//data
//animation
const fadeOut = keyframes`
  0% {
      opacity: 0;
  }
  100% {
      opacity: 0;
  }
`;
const fadeIn = keyframes`
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
`;
const linearReg = keyframes`
  0% {
    transform: rotate(0deg);
    color: rgba(255,0,0,1);
  }
  40% {
      transform: translate(0,-40px) rotate(-60deg);
      color: rgba(200,55,0,1);
  }
  70% {
    transform: translate(0,-45px) rotate(-35deg);
    color: rgba(0,255,10,1);
  }
  80% {
    transform: translate(0,-38px) rotate(-40deg);
    color: rgba(0,255,50,1);
  }
  90% {
    transform: translate(0,-34px) rotate(-30deg);
    color: rgba(0,255,50,1);
  }
  100% {
    transform: translate(0,-35px) rotate(-32deg);
    color: rgba(0,255,50,1);
  }
`;

const SkillFeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${props => props.time}ms ${props => props.fade} ease-in both;
`;

const Description = styled.p`
    padding: 0px 50px 25px 50px;
    text-align: justify;
    text-indent: 1em;
    &:first-letter {
        font-size: 2em;
        color: yellow;
    }
`;

const SkillSets = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: auto;
    padding: 15px 50px 0px 50px;
    color: #222;
`;
const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const AwesomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 20px;
    align-items: center;
`;

const LineContainer = styled.div`
    position: absolute;
    z-index: 10;
    animation: 2s ${linearReg} ease-in both;
`;
export default function SkillFeature({ title, icon, description, skillsets, theme, choice }) {
    useEffect(() => {
    }, [choice]); 

    const planeInit = useCallback(node => {
        if(node !== null) {
            startPlane(node, theme[1]);
        }
    })
    function createIcons(name, icons) {
        switch (name.toLowerCase()) {
            case 'backend developer':
                return (<IconContainer>
                    {icons.map((ico, i) =>
                        (<React.Fragment key={ico + i}>
                            <AwesomeContainer>
                                <FontAwesomeIcon size='8x' icon={['far', ico]} />
                                <h5>{ico}</h5>
                            </AwesomeContainer>
                            {icon.length - 1 !== i ?
                                (<div style={{ marginBottom: 50 }}>
                                    <FontAwesomeIcon size='2x' icon={['far', 'plus']} />
                                </div>) : null}
                        </React.Fragment>)
                    )}
                </IconContainer>)
            case 'data science':
                return (<IconContainer>
                    {icons.map((ico, i) =>
                        (<React.Fragment key={ico + i}>
                            <AwesomeContainer>
                                {ico === 'chart-scatter' ?
                                    (<LineContainer>
                                        <FontAwesomeIcon size='6x' icon={['fal', 'horizontal-rule']} />
                                    </LineContainer>) : null}
                                <FontAwesomeIcon size='8x' icon={[ico === 'chart-scatter' ? 'fal' : 'far', ico]} />
                                <h5>{ico === 'chart-scatter' ? <span><FontAwesomeIcon icon={['far', 'brain']} /> Machine Learning </span> : 'Data Visualization'}</h5>
                            </AwesomeContainer>
                            {icon.length - 1 !== i ?
                                (<div style={{ marginBottom: 50 }}>
                                    <FontAwesomeIcon size='2x' icon={['far', 'plus']} />
                                </div>) : null}
                        </React.Fragment>)
                    )}
                </IconContainer>)
            case 'animation':
                return (
                    <AwesomeContainer>
                        <canvas ref={planeInit} width={250} height={150} style={{ marginTop: -5 }}></canvas>
                        <h5>Computer Animation</h5>
                    </AwesomeContainer>)
            default:
                return <div><FontAwesomeIcon size='8x' icon={['far', icons]} /></div>
        }
    }
    return (
        <SkillFeatureContainer>
            <h1 style={{ color: 'yellow' }}>{title}</h1>
            {createIcons(title, icon)}
            <SkillSets>
                {skillsets.map(skill => <Capsule key={skill} label={skill} show={true} />)}
            </SkillSets>
            <Description>{description}</Description>
        </SkillFeatureContainer>
    )
}