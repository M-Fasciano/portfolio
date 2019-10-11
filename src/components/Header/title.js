import React from 'react'
import styled from 'styled-components'
import colours from '../../styles/export/colours.scss'

const StyledSpan = styled.span`
  color: ${colours.white};
  font-family: 'Major Mono Display', monospace;
  display: block;
  font-size: 1.125rem;
  margin-top: 0.5rem;
  font-weight: bold;
`

const Title = () => {
  return <StyledSpan>front-end web developer</StyledSpan>
}

export default Title
