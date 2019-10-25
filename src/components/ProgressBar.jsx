import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
    position: absolute;
    width: 5px;
    right: 20px;
    top: 100px;
    background: white;
    border-radius: 5px;
    z-index: 98;
    overflow: hidden;
`;

const Bar = styled.div`
    position: relative;
    width: 5px;
    top: 0;
    left: 0;
    height: ${props => props.height}px;
    background: ${props => props.primaryColor || "yellow"};
    border-radius: 5px;
    z-index: 99;
    transition: height 1s;
`;

export default function ProgressBar({ currentIndex, primaryColor, projectsLength }) {
    const progRef = useRef(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        const _height = progRef.current.clientHeight / projectsLength;
        setHeight(_height * (currentIndex + 1));
    }, [currentIndex, projectsLength]);
    return (
        <ProgressContainer
            style={{ height: '60vh' }}
            ref={progRef}>
            <Bar
                primaryColor={primaryColor}
                height={height} />
        </ProgressContainer>
    )
}