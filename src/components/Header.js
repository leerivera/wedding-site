import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            {/* <a href="#">
               Details 
            </a>
            <a href="#">
                RSVP
            </a>
            <a href="#">
                Registry
            </a>
            <a>
                Gallery
            </a> */}
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position:fixed;

`;