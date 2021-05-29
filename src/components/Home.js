import React from 'react'
import styled from "styled-components"
import Section from "./Section"

import Details from "./Details"
import TitlebarGridList from './Cards'




function Home() {
    return (
        <Container>
            <Section
            title="Akosua & Nicholas"
            backgroundImg="JSR67227.jpg"
            />
            {/* <Section
               title="Details"
               backgroundImg="JSR67348.jpg"
               
         
            /> */}
            <Details
            title="Details"
            backgroundImg="JSR67348.jpg"
            />
            <TitlebarGridList/>
          
          
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;`;
