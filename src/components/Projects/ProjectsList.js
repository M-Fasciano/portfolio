import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import colours from '../../styles/export/colours.scss'
import { device } from '../Global/device'

const StyledParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  position: relative;

  li {
    display: inline-block;
    font-weight: bold;
    font-size: 0.875rem;

    &:last-child:after {
      content: '';
    }

    &:after {
      color: ${colours.mediumGrey};
      content: '•';
      padding: 0 .5rem;
    }
  }
`

const StyledChildDiv = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 200px;
  position: relative;
  
  &:after {
    background-color: rgba(0,0,0, 0.7);
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  @media ${device.laptopL} {
    min-height: 300px;
  }
`

const StyledChildInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 200px;
  padding: 1rem;
  position: relative;
  z-index: 1;

  @media ${device.laptopL} {
    min-height: 300px;
  }

  @media ${device.laptopL} {
    padding: 2rem;
  }

  h2 {
    color: ${colours.white};
    font-weight: 500;
    margin: 0;
    position: relative;

    @media ${device.laptop} {
      font-size: 2rem;
    }
  }
`

const StyledP = styled.p`
  color: ${colours.black};
  font-size: 1rem;
  margin: 0.5rem 0 0;

  strong {
    font-weight: bold;
    font-size: 0.875rem;
  }

  a {
    color: ${colours.black};
    font-weight: bold;
    margin-left: 0.5rem;
    text-decoration: none;
    position: relative;
    z-index: 15;
    
    span {
      margin-right: 7px;
    }

    &:hover {
      color: ${colours.mediumGrey};
      transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`

const ProjectsList = props => {
  return (
    <>
      {props.projects.map(project => (
        <StyledParentDiv key={project.id}>
          <StyledChildDiv 
            id={project.id} 
            img={project.src}
          >
            <StyledChildInnerDiv>
              <h2>{project.title}</h2>
            </StyledChildInnerDiv>
          </StyledChildDiv>
          <StyledP>
            {project.desc}
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View project</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </StyledP>
          <StyledP>
            <strong>
              Technologies:
            </strong>
          </StyledP>
          <ul>
            <li>{project.technologies.html}</li>
            <li>{project.technologies.js}</li>
            <li>{project.technologies.css}</li>
            <li>{project.technologies.tool}</li>
          </ul>
        </StyledParentDiv>
      ))}
    </>
  )
}

export default ProjectsList
