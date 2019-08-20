import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import pick_flicks_header from '../imgs/projects/pick_flicks_header.png';
//components
import { Container, FeatureContainer} from '../components/Containers.jsx';
import CurrentWork from '../components/CurrentWork.jsx';
import Feature from '../components/Feature.jsx';

const currentWork = {
    headerImg: pick_flicks_header,
    desc: "Duis eu convallis leo. Etiam varius vehicula augue ut viverra. Ut placerat orci vel commodo pellentesque. Pellentesque maximus malesuada lacus non venenatis. Vivamus eleifend cursus dui, eu rutrum nibh tempus non. Quisque at nisi rhoncus, pellentesque lacus vel, pretium turpis. Nunc vitae placerat leo.",
    tagline: "A movie website built using MovieDB API",
    title: "Pick Flicks"
}
function Code() {
    return (
        <Container>
            <FeatureContainer bgcolor={'#CCC'}>
                <CurrentWork {...currentWork} />
            </FeatureContainer>
        </Container>
    );
}

function mapStateToProps({theme, mobile}) {
    return { theme, mobile }
}
export default connect(mapStateToProps)(Code);