import React from 'react';
import styled from 'styled-components'

const Formations = () => {
    return(
        <Container>
            <TitleContainer>
                <Title>Fabian.formations()</Title>
            </TitleContainer>
            <FormationContainer>
                <SchoolContainer>
                    <FormationLimiter>
                        <School>
                            <SchoolMarker>
                            </SchoolMarker>
                            <div>
                                <p>Name of the course</p>
                                <p>name of the school</p>
                                <p>what your formation does</p>
                            </div>
                        </School>
                        <School>
                            <SchoolMarker>
                            </SchoolMarker>
                            <div>
                                <p>Name of the course</p>
                                <p>name of the school</p>
                                <p>what your formation does</p>
                            </div>
                        </School>
                        <School>
                            <SchoolMarker>
                            </SchoolMarker>
                            <div>
                                <p>Name of the course</p>
                                <p>name of the school</p>
                                <p>what your formation does</p>
                            </div>
                        </School>
                        <School>
                            <SchoolMarker>
                            </SchoolMarker>
                            <div>
                                <p>Name of the course</p>
                                <p>name of the school</p>
                                <p>what your formation does</p>
                            </div>
                        </School>
                    </FormationLimiter>
                </SchoolContainer>
                <ExperienceContainer>
                    <FormationLimiter>
                        <School>
                            <SchoolMarker>
                            </SchoolMarker>
                            <div>
                                <p>Name of the course</p>
                                <p>name of the school</p>
                                <p>what your formation does</p>
                            </div>
                        </School>
                        <School>
                            <SchoolMarker>
                            </SchoolMarker>
                            <div>
                                <p>Name of the course</p>
                                <p>name of the school</p>
                                <p>what your formation does</p>
                            </div>
                        </School>
                        <School>
                            <SchoolMarker>
                            </SchoolMarker>
                            <div>
                                <p>Name of the course</p>
                                <p>name of the school</p>
                                <p>what your formation does</p>
                            </div>
                        </School>
                        <School>
                            <SchoolMarker>
                            </SchoolMarker>
                            <div>
                                <p>Name of the course</p>
                                <p>name of the school</p>
                                <p>what your formation does</p>
                            </div>
                        </School>
                    </FormationLimiter>
                </ExperienceContainer>
            </FormationContainer>
        </Container>
    );
};

const Container = styled.div`
    padding:100px 50px;
`
const TitleContainer = styled.div`
    margin-bottom:50px;
`
const Title = styled.h1`
    font-size: 50px;
    position:relative;
    margin-bottom:80px;
    &:after{
        content:"Qui suis-je ?";
        position:absolute;
        color:rgba(180, 180, 180, 0.1);
        left:0;
        top:1px;
        font-size:100px;
    }
`
const FormationContainer = styled.div`
    display:flex;
    justify-content:center;
`
const SchoolContainer = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const ExperienceContainer = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const FormationLimiter = styled.div`
    border-left:solid 5px #672AE9;
    padding:30px 0;
    position:relative;
`
const School = styled.div`
    padding-left:20px;
    margin-bottom:40px;
`
const SchoolMarker = styled.div`
    width:18px;
    height:18px;
    background: #672AE9;
    border-radius:50%;
    position:absolute;
    left: -11px;
`

export default Formations;
