import React, {useCallback} from 'react';
import styled from 'styled-components';

//scripts
import startEnvironment from '../scripts/field';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: green;
`;

export default function InteractiveBG() {
    const canvasRef = useCallback((canvas) => {
        console.log("canvas", canvas);
        if(canvas) {
            startEnvironment(canvas);
        }
    })
    return (
        <Container>
            <canvas 
                ref={canvasRef}
                height={720}
                width={1280}/>
        </Container>
    )
}