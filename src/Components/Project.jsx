import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Project = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>Fabian.project()</Title>
            </TitleContainer>
            <ProjectContainer>
                <ProjectElement>
                    <InformationContainer>
                        <p>Name of the project</p>
                        <p>language</p>
                        <p>stack</p>
                        <p>description</p>
                        <a href="a"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                    </InformationContainer>
                    <ImageContainer>
                        <Image src='assets/image/project_illu.jpg' alt="" />
                    </ImageContainer>
                </ProjectElement>
                <ProjectReverse>
                    <InformationContainer>
                        <p>Name of the project</p>
                        <p>language</p>
                        <p>stack</p>
                        <p>description</p>
                        <a href="a"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                    </InformationContainer>
                    <ImageContainer>
                        <Image src='assets/image/project_illu.jpg' alt="" />
                    </ImageContainer>
                </ProjectReverse>
                <ProjectElement>
                    <InformationContainer>
                        <p>Name of the project</p>
                        <p>language</p>
                        <p>stack</p>
                        <p>description</p>
                        <a href="a"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                    </InformationContainer>
                    <ImageContainer>
                        <Image src='assets/image/project_illu.jpg' alt="" />
                    </ImageContainer>
                </ProjectElement>
                <ProjectReverse>
                    <InformationContainer>
                        <p>Name of the project</p>
                        <p>language</p>
                        <p>stack</p>
                        <p>description</p>
                        <a href="a"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                    </InformationContainer>
                    <ImageContainer>
                        <Image src='assets/image/project_illu.jpg' alt="" />
                    </ImageContainer>
                </ProjectReverse>
            </ProjectContainer>
        </Container>
    );
};

const Container = styled.div`
    padding:100px 80px;
`
const ProjectContainer = styled.div``
const TitleContainer = styled.div``
const Title = styled.h1`
    position:relative;
    margin-bottom:50px;
    color:#672AE9;
    &:after{
        content:"Qui suis-je ?";
        position:absolute;
        color:rgba(180, 180, 180, 0.1);
        left:0;
        top:1px;
        font-size:50px;
    }
`
const ProjectElement = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:120px;
`
const ProjectReverse = styled.div`
    display:flex;
    flex-direction:row-reverse;
    justify-content:space-between;
    margin-bottom:120px;
    text-align:right;
`
const ImageContainer = styled.div`
    width:40%;
    border-radius:7px;
    overflow:hidden;
`
const InformationContainer = styled.div`
    width:60%;
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`

export default Project;
