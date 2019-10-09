import React from 'react'
import styled from 'styled-components'
import colours from '../../styles/export/colours.scss'

const StyledP = styled.p`
  color: ${colours.white};
  font-size: 1rem;
  line-height: 22px;
  letter-spacing: 1px;
  margin: 0;

  &:before {
    background-color: ${colours.white};
    content: '';
    display: block;
    height: 2px;
    margin: 1.5rem 0;
    width: 50px;
  }
`

const Intro = () => {
  return (
    <StyledP>
      Creative front-end web developer, with focus on creating web standard code
      that works equally well on multiple devices and browsers.
    </StyledP>
  )
}

export default Intro
