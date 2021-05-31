import React from 'react'
import styled from 'styled-components'
import { space, color, layout, flexbox } from 'styled-system'

function Details({ backgroundImg }) {
    return (
        <div id="Details">
            <Wrap>
                <ItemText>                          
                    <h2>RSVP</h2>
                    <br/>
                    <p>We kindly request that you RSVP by 5 July 2021. Click <a href="https://nikos082021.surveysparrow.com/s/Akosua-and-Nicholas-Wedding-RSVP/tt-7aa0a2">HERE</a> to RSVP.</p>
                    <br/>
                    <h2>CEREMONY AND RECEPTION</h2>
                    <br/>
                    <p>The ceremony and reception will take place on Saturday, August 21, </p>
                    <br/>
                    <p>2021 at the following address:</p>
                    <p>11507 Valley View Dr</p>
                    <p>Bristow, VA 20136</p>
                    <br/>
                    <p>The order of events is as follows:</p>
                    <br/>
                    <ul>
                        <li>5:30 PM	Ceremony</li>
                        <li>6:00 PM	Cocktail Hour</li>
                        <li>7:15 PM	Introductions</li>
                        <li>7:30 PM	Dinner Served</li>
                        <li>8:00 PM	Open Photobooth</li>
                        <li>8:30 PM	Open Dancing</li>
                        <li>11:00 PM Formal Exit</li>
                    </ul>
                    <br/>

                    <h2>DRESS CODE</h2>
                    <br/>
                    <p>Dress to impress. Formal/Cocktail Attire.</p>
                    <br/>
                    <h2>ACCOMODATIONS</h2>
                    <br/>
                    <p>For out-of-town guests, 
                        we have reserved a block of rooms</p>
                        
                      <p>at the Tru by Hilton Manassas for </p>
                        
                    <p>August 19 – 22, 2021.</p>
                       
                    
                    <p>Click <a href='https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.hilton.com%2Fen%2Fbook%2Freservation%2Fdeeplink%2F%3F%26ctyhocn%3DMNZGWRU%26groupCode%3DBDR%26arrival%3D20210819%26departure%3D20210822%26cid%3DOM%2CWW%2CHILTONLINK%2Cen%2CDirectLink%26fromId%3DHILTONLINKDIRECT&data=04%7C01%7CLautice.Colbert%40hilton.com%7Caaae589a5bda408be00408d90c2adeb7%7C660292d2cfd54a3db7a7e8f7ee458a0a%7C0%7C0%7C637554200539026087%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=Sb5%2F2QNnmL%2F%2F2YggsAFcHEEmY9GOjzFXz5uaR%2Bss9Xc%3D&reserved=0'>HERE</a> to book your room.</p>

                </ItemText>
            </Wrap>
            
        </div>
    )
}

export default Details

const Wrap = styled.div`
     width: 100vw;
    //  height: 100vh;
     display:flex;
     flex-direction: column;
     
     
     justify-content: space-between;
     background-size:cover;
     background-postion: center;
     background-repeat: no-repeat;
     align-items: center;
     background-image: url("/images/JSR67227.jpg");
     box-sizing: border-box;
    //  background-image: ${props => `url("/images/${props.bgImage}")`};
    background-position: center;
    


 `;
// const Box = styled.div(
//     {
//       boxSizing: 'border-box',
//       minWidth: 10,
//     },
//     space,
//     color,
//     layout,
//     flexbox
//   )

const ItemText = styled.div`
     margin-top: 10vh;
     margin-bottom: 10vh;
    padding-top: 10vh;
    padding-bottom: 10vh;
    padding-right: 20vh;
    padding-left: 20vh;
    // background-opacity: 75%;

    margin-right: 10vh;
    margin-left: 10vh;
    
    
    text-align:center;
    justify-content: space-between;
    border-sizing: border-box;
    // background-image: url("/images/JSR67227.jpg");
    background-color: white;
    
    
    // background-width: 00px;
    
`;
