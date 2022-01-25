import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import Typed from "typed.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import './../style/haha.css'

const Landing = () => {
    const description = useRef(null)

    useEffect(()=>{
        const typed = new Typed(description.current, {
            strings:["développeur", "junior", "haha"],
            startDelay: 300,
            typeSpeed:100,
            backSpeed:30,
            backDelay:500,
            loop:true,
            showCursor:true,
            cursorChar:"/"
        })

        return () => {
            typed.destroy()
        }
    }, [])

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
                    <Description>Je suis <span ref={description}></span></Description>
                    <div>
                        <UlSocial>
                            <SocialElement className='icon_element'>
                                <a href="a">
                                    <FontAwesomeIcon className='icon' style={{padding:"5px", position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background: "#333",color:"rgba(255,255,255,0.2)"}} icon={faGithub} />
                                </a>
                            </SocialElement>
                            <SocialElement>
                                <a href="a">
                                    <FontAwesomeIcon style={{padding:"5px", position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background: "#333",color:"rgba(255,255,255,0.2)",fontSize:"15px"}} icon={faTwitter} />
                                </a>
                            </SocialElement>
                            <SocialElement>
                                <a href="a">
                                    <FontAwesomeIcon style={{padding:"5px",  position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background: "#333",color:"rgba(255,255,255,0.2)",fontSize:"15px"}} icon={faTwitter} />
                                </a>
                            </SocialElement>
                        </UlSocial>
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
    padding:100px 0;
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
    width:65%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const ImageBorder = styled.div`
    width:40%;
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
    width:35%;
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
const UlSocial = styled.ul`
    margin-top:50px;
    position:relative;
    display:flex;
    padding-left:15px;
`
const SocialElement = styled.li`
    position:relative;
    list-style:none;
    width:40px;
    height:35px;
    margin-right:40px;
    transform:rotate(-25deg) skew(25deg);
    z-index:10;
    &:before{
        content:"";
        position:absolute;
        bottom:-10px;
        left:0;
        width:100%;
        height:10px;
        background:#2a2a2a;
        transform-origin:top;
        transform:skewX(-45deg);
    }
    &:after{
        content:"";
        position:absolute;
        bottom:0;
        left:-10px;
        width:10px;
        height:100%;
        background:#2a2a2a;
        transform-origin:right;
        transform:skewY(-46deg);
    }
    /* &:hover{
        background:red;
    } */
`
export default Landing;
