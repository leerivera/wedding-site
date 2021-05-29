import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-scroll'

function Header() {
    return (
        <Container>

          <Menu>
            <h1><Link to="Details" spy={true} smooth={true}><a href="#">
               Details 
            </a></Link></h1>
            <h1><a href="#">
                RSVP
            </a></h1>
            <h1><a href="https://www.honeyfund.com/wedding/baah-dwomoh-rivera-08-21-2021">
                Registry
            </a></h1>
            <h1><a href="https://1drv.ms/u/s!AtX6oBLRLqJFg-gES_uBQtivxgEImA?e=V0puy1">
                Gallery
            </a></h1>

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
    // position:fixed;
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

    h1 {
        font-size: 25px;
       
        // font-weight: 1200px;
        text-transform: uppercase;
        padding 0 50px;
        
        flex-wrap: no-wrap;s
    }

    @media(max-width: 768px) {
        display: none
    }


`;
