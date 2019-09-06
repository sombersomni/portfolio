import React, {useState} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import pick_flicks_header from '../imgs/projects/pick_flicks_header.png';
//components
import { Container, FeatureContainer} from '../components/Containers.jsx';
import CurrentWork from '../components/CurrentWork.jsx';
import Project from '../components/Project.jsx';

const Projects = styled.div`
    display: flex;
    flex-direction: column;
    width: 24%;
    min-width: 200px;
    height: 100vh;
    background: #999;
    position: static;
    border-left: 2px solid black;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    padding-top: 80px;
`;

const projects = [
    {
        headerImg: pick_flicks_header,
        desc: "Duis eu convallis leo. Etiam varius vehicula augue ut viverra. Ut placerat orci vel commodo pellentesque. Pellentesque maximus malesuada lacus non venenatis. Vivamus eleifend cursus dui, eu rutrum nibh tempus non. Quisque at nisi rhoncus, pellentesque lacus vel, pretium turpis. Nunc vitae placerat leo.",
        tagline: "A movie website built using MovieDB API",
        title: "Pick Flicks"
    },
    {
        headerImg: pick_flicks_header,
        desc: "Duis eu convallis leo. Etiam varius vehicula augue ut viverra. Ut placerat orci vel commodo pellentesque. Pellentesque maximus malesuada lacus non venenatis. Vivamus eleifend cursus dui, eu rutrum nibh tempus non. Quisque at nisi rhoncus, pellentesque lacus vel, pretium turpis. Nunc vitae placerat leo.",
        tagline: "A movie website built using MovieDB API",
        title: "Pick Flicks"
    },
    {
        headerImg: pick_flicks_header,
        desc: "Duis eu convallis leo. Etiam varius vehicula augue ut viverra. Ut placerat orci vel commodo pellentesque. Pellentesque maximus malesuada lacus non venenatis. Vivamus eleifend cursus dui, eu rutrum nibh tempus non. Quisque at nisi rhoncus, pellentesque lacus vel, pretium turpis. Nunc vitae placerat leo.",
        tagline: "A movie website built using MovieDB API",
        title: "Pick Flicks"
    },
    {
        headerImg: pick_flicks_header,
        desc: "Duis eu convallis leo. Etiam varius vehicula augue ut viverra. Ut placerat orci vel commodo pellentesque. Pellentesque maximus malesuada lacus non venenatis. Vivamus eleifend cursus dui, eu rutrum nibh tempus non. Quisque at nisi rhoncus, pellentesque lacus vel, pretium turpis. Nunc vitae placerat leo.",
        tagline: "A movie website built using MovieDB API",
        title: "Pick Flicks"
    }
]
function Code() {
    return (
        <Container>
            <MainContainer>
                <CurrentWork {...projects[0]} />
                <Projects>
                     {projects.map((project, i) => <Project key={i.toString()} title={project.title}/>)}
                </Projects>
             </MainContainer>
        </Container>
    );
}

function mapStateToProps({theme, mobile}) {
    return { theme, mobile }
}
export default connect(mapStateToProps)(Code);