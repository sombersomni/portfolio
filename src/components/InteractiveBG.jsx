import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
//scripts
import startEnvironment from '../scripts/room';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: green;
`;

export default function InteractiveBG() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const containerRef = useCallback(container => {
        if(container) {
            console.log(container);
            setWidth(container.clientWidth);
            setHeight(container.clientHeight);
        }
    });
    const canvasRef = useCallback(canvas => {
        console.log("canvas", canvas);
        if(canvas) {
            startEnvironment(canvas);
        }
    })
    return (
        <Container ref={containerRef}>
            <canvas 
                ref={canvasRef}
                height={height}
                width={width > 1280 ? width : 1500}/>
        </Container>
    )
}

