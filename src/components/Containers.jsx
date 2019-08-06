import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0px;
`;

export const FeatureContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${ props => props.bgcolor || '#ff0022' };
`;