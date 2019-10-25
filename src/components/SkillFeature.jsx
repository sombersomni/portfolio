import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
//external scripts
import startPlane from '../scripts/plane';

//components
import Capsule from './Capsule.jsx';
//animation
import { fadeIn, linearReg } from './animations/basic';

const SkillFeatureContainer = styled.div`
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: ${props => props.mobile ? "column" : "row"};
    align-items: center;
    animation: ${props => props.time || 1000}ms ${fadeIn} ease-out both;
    h1 {
        color: ${props => props.primaryColor};
    }
    padding-bottom: 50px;
    h5 {
        font-family: "Staatliches", monospace;
    }
`;

const Description = styled.p`
    padding: 0px 50px 25px 50px;
    text-align: justify;
    text-indent: 1em;
    &:first-letter {
        font-size: 2em;
        color: ${props => props.secondaryColor};
    }
`;

const DescContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    width: ${props => props.mobile ? "100%" : "50%"};
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

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: ${props => props.mobile ? "100%" : "45%"};
    min-width: 200px;
`;
export default function SkillFeature({ title, icon, description, skillsets, theme, choice, mobile }) {

    const planeInit = useCallback(node => {
        if (node !== null) {
            startPlane(node, theme['white']);
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
        <SkillFeatureContainer
            time={1000}
            mobile={mobile}>
            <TitleContainer mobile={mobile} primaryColor={theme[5]}>
                <h1>{title}</h1>
                {createIcons(title, icon)}
                <SkillSets>
                    {skillsets.map((skill, i) => <Capsule key={skill} theme={theme} label={skill} i={i} show={true} />)}
                </SkillSets>
            </TitleContainer>
            <DescContainer mobile={mobile}>
                <Description secondaryColor={theme[5]} time={2000}>{description}</Description>
            </DescContainer>
        </SkillFeatureContainer>
    )
}