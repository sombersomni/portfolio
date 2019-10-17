import React, {  useEffect, useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
//scripts
import startEnvironment from '../scripts/room';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #4D587A;
`;

function InteractiveBG({ screenWidth }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef) {
            console.log(canvasRef.current.innerWidth, canvasRef.innerHeight);
            startEnvironment(canvasRef.current, 0x4D587A);
        }
    }, [screenWidth])
    return (
        <Container>
            <canvas
                ref={canvasRef}
                style={{ zIndex: 1 }}
                height={800}
                width={screenWidth < 1280 ? screenWidth : 1500} />
        </Container>
    )
}

function mapStateToProps({ screenWidth }) {
    return { screenWidth }
}
export default connect(mapStateToProps)(InteractiveBG);