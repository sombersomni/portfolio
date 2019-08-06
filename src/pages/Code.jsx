import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//components
import { Container, FeatureContainer} from '../components/Containers.jsx';
import CurrentWork from '../components/CurrentWork.jsx';
import Feature from '../components/Feature.jsx';

function Code() {
    return (
        <Container>
            <FeatureContainer bgcolor={'#CCC'}>
                <CurrentWork />
            </FeatureContainer>
        </Container>
    );
}

function mapStateToProps({theme, mobile}) {
    return { theme, mobile }
}
export default connect(mapStateToProps)(Code);