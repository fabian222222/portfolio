import React from 'react';
import styled from 'styled-components';

const Landing = () => {
    return(
        <Container>
            <InformationContainer>
                <ImageContainer>
                    <ImageBorder>
                        <Image src="assets/image/feuka_tete.png" alt="fabian head" />
                    </ImageBorder>
                </ImageContainer>
                <TextInformation>
                    <Name>Zuo Fabian</Name>
                    <Description>Je suis développeur</Description>
                    <div>
                        réseaux
                    </div>
                </TextInformation>
            </InformationContainer>
            <DiscoverContainer>
                <Discover>Me découvrire</Discover>
            </DiscoverContainer>
        </Container>
    );
};
const Container = styled.div`
    color:white;
`
const Name = styled.h1`
    font-family: "Hazukaze";
    font-size : 150px;
    line-height:80%;
    color:#672AE9;
`
const Description = styled.h2`
    padding:5px 0;
    font-size: 30px;
    font-family:"montserrat";
    font-weight : 500;
`
const InformationContainer = styled.div`
    display:flex;
    flex-direction: row-reverse;
    padding:0 50px;
`
const ImageContainer = styled.div`
    width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const ImageBorder = styled.div`
    border:5px solid white;
    border-radius:50%;
    overflow:hidden;
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`
const TextInformation = styled.div`
    width:50%;
    display:flex;
    justify-content:center;
    flex-direction:column;
`
const DiscoverContainer = styled.div`
    display:flex;
    justify-content:center;
    padding:50px 0;
`
const Discover = styled.button`
    color:white;
    padding:10px 30px;
    border-radius:8px;
    background-color : #672AE9;
    border:none;
    box-shadow: 0px 0px 13px 2px rgba(103,42,233,0.63);
    cursor:pointer;
`

export default Landing;
