import React from 'react';
import styled from 'styled-components';

const About = () => {
    return(
        <Container>
            <SectionTitle>
                Fabian.is()
            </SectionTitle>
            <InformationContainer>
                <Description>
                    <p>
                        Actuellement étudiant à Epitech Digital en développement web. Je suis un gamer depuis toujours et j'ai grandit dans ce milieu assez tech, j'ai donc toujours été proche de ce domaine. Après un BAC S, c'est sans hésitation   que j'ai décidé de me diriger vers le web. 
                    </p>
                </Description>
                <Card>
                    <p>Nom : Zuo Fabian</p>
                    <p>Mail : Fabianzuo@gmail.com</p>
                    <p>Localisation : Paris, France</p>
                    <p>Téléphone : 06 18 25 32 62</p>
                </Card>
            </InformationContainer>
            <Cv>CV download</Cv>
        </Container>
    );
};

const Container = styled.div`
    padding:100px 80px;
`
const SectionTitle = styled.h1`
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
const InformationContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:30px;
`
const Description = styled.div`
    width:60%;
    text-align:justify;
`
const Card = styled.div`
    width:30%;
    background-color:#616ADB;
    padding:25px;
    border-radius:8px;
    box-shadow: 0px 0px 10px 3px #616ADB;
`
const Cv = styled.button`
    background-color:#672AE9;
    border-radius:5px;
    padding: 10px  20px;
    border:none;
    color:white;
    box-shadow: 0px 0px 10px 3px #672AE9;
`

export default About;
