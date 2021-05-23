import React from 'react'
import styled from 'styled-components'

function Details() {
    return (
        <div>
            <Wrap>
                <ItemText>
                    <h1>RSVP</h1>
                    <br/>
                    <p>We kindly request that you RSVP by 5 July 2021. Click <a href="#">HERE</a> to RSVP.</p>
                    <br/>
                    <h1>CEREMONY AND RECEPTION</h1>
                    <br/>
                    <p>The ceremony and reception will take place on Saturday, August 21, </p>
                    <br/>
                    <p>2021 at the following address:</p>
                    <p>11507 Valley View Dr</p>
                    <p>Bristow, VA 20136</p>
                    <br/>
                    <h3>The order of events is as follows:</h3>
                    <br/>
                    <ul>
                        <li>5:30 PM	Ceremony</li>
                        <li>6:00 PM	Cocktail Hour</li>
                        <li>7:00 PM	Dinner Seating</li>
                        <li>7:15 PM	Introductions</li>
                        <li>7:30 PM	Dinner Served</li>
                        <li>8:00 PM	Open Photobooth</li>
                        <li>8:30 PM	Open Dancing</li>
                        <li>11:00 PM Formal Exit</li>
                    </ul>
                    <br/>

                    <h1>DRESS CODE</h1>
                    <br/>
                    <p>Dress to impress. Formal/Cocktail Attire.</p>
                    <br/>
                    <h1>ACCOMODATIONS</h1>
                    <br/>
                    <p>For out-of-town guests, we have reserved a block of rooms at the Tru by Hilton Manassas for August 19 – 22, 2021. Click <a href='#'>HERE</a> to book your room.</p>
                </ItemText>
            </Wrap>
            
        </div>
    )
}

export default Details

const Wrap = styled.div`
     width: 100vw;
     height:100vh;
     margin-left: -15px;
     margin-right: -15px;
     justify-content: space-between;
     background-size:cover;
     background-postion: center;
     background-repeat: no-repeat;
     background-image: url("/images/JSR67227.jpg");

`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align:center;
    justify-content: space-between;
`;
