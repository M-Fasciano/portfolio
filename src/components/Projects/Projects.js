import React from 'react'
import projects from '../../mocks/projects'
import ProjectsList from './ProjectsList'
import ProjectsShapes from './ProjectsShapes'
import styled from 'styled-components'
import colours from '../../styles/export/colours.scss'
import { device } from '../Global/device'

const StyledSection = styled.section`
  background-color: ${colours.aquamarine};
  padding: 4rem 2rem 0;
  position: relative;

  @media ${device.tablet} {
    padding-left: 0;
    padding-right: 0;
  }
`

const StyledSectionInner = styled.div`
  @media ${device.tablet} {
    margin-left: auto;
    margin-right: auto;
    max-width: 65%;
  }
`

const StyledH2 = styled.h2`
  color: ${colours.black};
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
`

class Projects extends React.Component {
  constructor() {
    super()
    this.state = {
      projects,
    }
  }

  render() {
    return (
      <StyledSection>
        <StyledSectionInner>
          <StyledH2>Recent projects</StyledH2>
          <ProjectsList projects={this.state.projects} />
        </StyledSectionInner>
        <ProjectsShapes />
      </StyledSection>
    )
  }
}

export default Projects
