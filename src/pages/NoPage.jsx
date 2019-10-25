import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { config } from 'react-spring';
import { Spring } from 'react-spring/renderprops';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Message = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 4px solid white;
    border-radius: 15px
    padding: 25px 10px;
    margin: 25px;
    min-width: 200px;
    height: 300px;
    h1 {
        font-size: 5em;
        margin: 0;
    }
    overflow-y: hidden;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(${props => props.primaryColor}, ${props => props.thirdColor});
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

function NoPage({ code = 404, message = 'Page Does Not Exist', theme }) {
    return (
        <Container thirdColor={theme[2]} primaryColor={theme[1]}>
            <Spring
                config={config.default}
                from={{ height: 0 }}
                to={{ height: 300 }}>
                {props => (
                    <Message 
                        secondaryColor={theme[3]}
                        style={{...props}}>
                        <FontAwesomeIcon
                            size="4x"
                            icon={['far', 'exclamation-triangle']} />
                        <h1>{code}</h1>
                        <div style={{ padding: '0px 20px' }}>
                            <span style={{ margin: '0px 20px' }}>{message}</span>
                        </div>
                    </Message>
                )}
            </Spring>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        theme: state.theme
    }
}
export default connect(mapStateToProps)(NoPage);