import styled from 'styled-components'
import colours from '../../styles/export/colours.scss'
import { device } from '../Global/Breakpoints'

// FOOTER
export const Footer = styled.footer`
  align-items: center;
  background-color: ${colours.black};
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  
  @media ${device.laptop} {
    background-color: transparent;
    bottom: 0;
    display: block;
    left: 0;
    padding: 2rem;
    position: fixed;
    text-align: left;
    width: 35%;
  }

  @media ${device.laptopL} {
    padding: 2rem 4rem;
    width: 30%;
  }
`

// SOCIAL
export const SocialList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    margin: 0 10px 0 0;
  }

  li a {
    align-items: center;
    border: 2px solid ${colours.white};
    border-radius: 50%;
    color: ${colours.white};
    display: flex;
    font-size: 0;
    height: 42px;
    justify-content: center;
    transition: background 0.35s ease-in-out;
    width: 42px;

    &:hover {
      background: ${colours.white};

      svg {
        transition: fill 0.35s ease-in-out;
        path {
          fill: ${colours.black};
        }
      }
    }

    svg {
      font-size: 20px;
    }
  }
`