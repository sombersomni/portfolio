import React, {  useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
//scripts
import startEnvironment from '../scripts/room';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #4D587A;
`;

function InteractiveBG({ screenWidth, mobile }) {
    const canvasRef = useRef(null);
    const [restart, setRestart] = useState(true);
    useEffect(() => {
        if (canvasRef && screenWidth && !restart) {
            
            console.log(screenWidth);
            startEnvironment(canvasRef.current, 0x4D587A, mobile);
        } else { 
            setTimeout(() => setRestart(false), 200);
        }
        
    }, [screenWidth, restart])
    return (
        <Container>
            <canvas
                ref={canvasRef}
                style={{ zIndex: 1 }}
                height={800}
                width={screenWidth} />
        </Container>
    )
}

function mapStateToProps({ screenWidth, mobile }) {
    return { screenWidth, mobile }
}
export default connect(mapStateToProps)(InteractiveBG);