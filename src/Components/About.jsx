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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae 
                        quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                    </p>
                </Description>
                <Card>
                    <p>Nom :</p>
                    <p>Mail :</p>
                    <p>Localisation :</p>
                    <p>Téléphone :</p>
                </Card>
            </InformationContainer>
            <Cv>CV download</Cv>
        </Container>
    );
};

const Container = styled.div`
    padding:100px 50px;
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
