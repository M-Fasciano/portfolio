import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import colours from '../../styles/export/colours.scss'

const StyledSocialList = styled.ul`
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

const Social = () => {
  return (
    <StyledSocialList>
      <li>
        <a
          href="https://github.com/M-Fasciano"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </li>
      <li>
        <a
          href="https://codepen.io/m-fasciano"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codepen
          <FontAwesomeIcon icon={['fab', 'codepen']} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/Michele-Fasciano-front-end-web-developer-142030352544894/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/webmf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/michele-fasciano-66110824/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
      </li>
    </StyledSocialList>
  )
}

export default Social
