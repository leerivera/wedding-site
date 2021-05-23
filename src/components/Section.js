import React from 'react'
import styled from "styled-components"

function Section({ title, backgroundImg, details }) {
    
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{ title } </h1>
                <h2>{ details }</h2>

            </ItemText>
        <ButtonGroup>
            
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"/> 
        </Wrap>
    )
}

export default Section

// const Wrapper = styled.div`
//   width: 100vw;
//   height: 100vh:
//   color: orange;
  
//   background-image: url('images/JSR67221.jpg);
// `;
const Wrap = styled.div`
  width: 100vw;
  height:100vh;
  background-size:cover;
  background-postion: center;
  background-repeat: no-repeat;
  
  display:flex;
  flex-direction: column;
  justify-content: space-between; //vertical
  align-items: center // horizontal
  background-image: url("/images/JSR67227.jpg");

  background-image: ${props => `url("/images/${props.bgImage}")`};
  
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align:center;
`;

const DownArrow = styled.img`
     margin-top: 20 px;
     height:40px;
     overflow-x: hidden;
     background: orange;
     animation: animateDown infinite 1.5s;
`;

const ButtonGroup = styled.div`
     display:flex;
`;
