import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from "@fortawesome/free-brands-svg-icons"
import styled from 'styled-components'
import './../style/skills.css'

const Skills = () => {
    return(
        <Container>
            <TitleContainer>
                <Title>Fabian.skills()</Title>
            </TitleContainer>
            <SkillsContainer>
                <SkillFirst className='card'>
                    <FontAwesomeIcon icon={faReact}/>
                    <p>I do some react</p>
                </SkillFirst>
                <SkillSecond className='card'>
                    <FontAwesomeIcon icon={faReact}/>
                    <p>I do some react</p>
                </SkillSecond>
                <SkillThird className='card'>
                    <FontAwesomeIcon icon={faReact}/>
                    <p>I do some react</p>
                </SkillThird>
                <SkillFourth className='card'>
                    <FontAwesomeIcon icon={faReact}/>
                    <p>I do some react</p>
                </SkillFourth>
            </SkillsContainer>
        </Container>
    );
};

const Container = styled.div`
    padding:100px 50px;
`
const TitleContainer= styled.div`
`
const Title = styled.h1`
    position:relative;
    margin-bottom:50px;
    &:after{
        content:"Qui suis-je ?";
        position:absolute;
        color:rgba(180, 180, 180, 0.1);
        left:0;
        top:1px;
        font-size:50px;
    }
`
const SkillsContainer = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 1fr);
    grid-column-gap: 30px;
    /* grid-row-gap: 0px;  */
    /* grid-auto-flow: row dense; */
    /* align-items:center; */
    /* justify-content:space-between; */
`
const SkillFirst = styled.div`
    grid-area: 1 / 1 / 2 / 2;
`
const SkillSecond = styled.div`
    grid-area: 1 / 2 / 2 / 3;
`
const SkillThird = styled.div`
    grid-area: 1 / 3 / 2 / 4;
`
const SkillFourth = styled.div`
    grid-area: 1 / 4 / 2 / 5;
`

export default Skills;
