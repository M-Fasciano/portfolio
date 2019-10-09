import React from 'react'
import styled from 'styled-components'
import colours from '../../styles/export/colours.scss'
import logo from './react-logo.svg'

const StyledP = styled.p`
  color: ${colours.white};
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin: 2rem 0 0;

  img {
    position: relative;
    top: 3px;
    width: 15px;
  }
`

const StyledCopy = styled.p`
  color: ${colours.white};
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin: .5rem 0 0;
`

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)

const Copyright = () => {
  return (
    <>
      <StyledP>
        Made by Michele with <Emoji label="love" symbol="❤️"/> using <img src={logo} alt="React js logo" />
      </StyledP>
      <StyledCopy>
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </StyledCopy>
    </>
  )
}

export default Copyright
