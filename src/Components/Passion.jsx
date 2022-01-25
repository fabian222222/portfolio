import React from 'react';
import styled from 'styled-components'

const Passion = () => {
    return(        
        <Container>
            <TitleContainer>
                <Title>Fabian.passion()</Title>
            </TitleContainer>
            <ImagesContainer>
                <ImageContainer>
                    <Image src="/assets/image/project_illu.jpg" alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src="/assets/image/project_illu.jpg" alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src="/assets/image/project_illu.jpg" alt="" />
                </ImageContainer>
            </ImagesContainer>
        </Container>
    );
};

const Container = styled.div`
    padding:100px 80px;
`
const TitleContainer = styled.div`
    margin-bottom:50px;
`
const Title = styled.h1``
const ImagesContainer = styled.div`
    display:flex;
    justify-content:space-between;
`
const ImageContainer =styled.div`
    width:30%;
    border-radius:5px;
    overflow:hidden;
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`

export default Passion;
