import React from 'react'
import styled from 'styled-components'
import { device } from '../Global/device'

import Projects from '../Projects/Projects'
import Timeline from '../Timeline/Timeline'

const StyledDiv = styled.div`
  margin: 0;
  padding: 0;

  @media ${device.laptop} {
    margin-left: 35%;
    width: 65%;
  }

  @media ${device.laptopL} {
    margin-left: 30%;
    width: 70%;
  }
`

const Content = () => {
  return (
    <StyledDiv>
      <Projects />
      <Timeline />
    </StyledDiv>
  )
}

export default Content
