import React from 'react';
import styled from 'styled-components'
import Header from '../Components/Header';
import Landing from '../Components/Landing';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Formations from '../Components/Formations';
import Project from '../Components/Project';
import Passion from '../Components/Passion';

const Portfolio = () => {
    return (
        <PageContainer style={{fontFamily:"Montserrat"}}>
            <Header></Header>
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
    background-color : #191922;
    width : 100vw;
    min-height : 100vh;
    color:white;
`

export default Portfolio;
