import React from 'react';
import styled from 'styled-components'
import Landing from '../Components/Landing';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Formations from '../Components/Formations';
import Project from '../Components/Project';
import Passion from '../Components/Passion';

const Portfolio = () => {
    return (
        <PageContainer>
            <Landing></Landing>
            <About></About>
            <Skills></Skills>
            <Formations></Formations>
            <Project></Project>
            <Passion></Passion>
        </PageContainer>
    )
};

const PageContainer = styled.div`
    background-color : #0A0A0D;
    width : 100vw;
    min-height : 100vh;
    color:white;
`

export default Portfolio;
