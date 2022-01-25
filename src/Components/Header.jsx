import React from 'react';
import styled from 'styled-components'

const Header = () => {
    return (
        <Container>
            <LogoContainer>
                <Logo>
                    Feuka
                </Logo>
            </LogoContainer>
            <MenuList>
                <MenuElement>
                    <MenuLink href="a">
                        À Propos()
                    </MenuLink>
                </MenuElement>
                <MenuElement>
                    <MenuLink  href="a">
                        Compétences()
                    </MenuLink>
                </MenuElement>
                <MenuElement>
                    <MenuLink  href="a">
                        Formations()
                    </MenuLink>
                </MenuElement>
                <MenuElement>
                    <MenuLink  href="a">
                        Projets()
                    </MenuLink>
                </MenuElement>
                <MenuElement>
                    <MenuLink  href="a">
                        Passions()
                    </MenuLink>
                </MenuElement>
            </MenuList>
        </Container>
    );
};

const Container = styled.div`
    padding:20px 50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const LogoContainer = styled.div``
const Logo = styled.h1`
    font-family:"Hazukaze";
    font-size:70px;
    line-height:80%;
`
const MenuList = styled.ul`
    display:flex;
    list-style:none;
`
const MenuElement = styled.li`
    margin-left:20px;
`
const MenuLink = styled.a`
    color:white;
    text-decoration:none;
    font-family:"montserrat"
`

export default Header;
