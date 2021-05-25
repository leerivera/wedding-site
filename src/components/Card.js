import React from 'react'
import styled from 'styled-components'
import { space, color, layout } from 'styled-system'

import Details from './Details'

const Card = (props) => (
//   <div style={{ color: '#fff' }}>
//      <Details/>
//   </div>
    <Box width={[1, 1 / 2]} p={4} mb={3} bg="tomato">
        <Details/>
    </Box>
)
export default Card

const Box = styled.div(
    {
      boxSizing: 'border-box',
      minWidth: 0,
    },
    space,
    color,
    layout
  )


