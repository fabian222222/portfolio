import React from 'react';
import styled from 'styled-components'
import Landing from '../Components/Landing';

const Portfolio = () => {
    return (
        <PageContainer>
            <Landing></Landing>
        </PageContainer>
    )
};

const PageContainer = styled.div`
    background-color : #0A0A0D;
    width : 100vw;
    min-height : 100vh;
`

export default Portfolio;
