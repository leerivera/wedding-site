import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Container>

          <Menu>
            <p><a href="#">
               Details 
            </a></p>
            <p><a href="#">
                RSVP
            </a></p>
            <p><a href="#">
                Registry
            </a></p>
            <p><a>
                Gallery
            </a></p>

          </Menu>
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
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;

`;
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    p {
        font-weight: 600;
        text-transform: uppercase;
        padding 0 10px;
        
        flex-wrap: no-wrap;s
    }

    @media(max-width: 768px) {
        display: none
    }


`;
