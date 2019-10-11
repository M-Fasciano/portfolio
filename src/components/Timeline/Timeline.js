import React from 'react'
import timelineData from '../../mocks/timeline'
import TimelineItem from './TimelineItem'
import styled from 'styled-components'
import colours from '../../styles/export/colours.scss'
import { device } from '../Global/device'

const StyledSection = styled.section`
  background: linear-gradient(-45deg, rgb(178, 219, 191) 0%, rgb(36, 123, 160) 100%);
  padding: 4rem 0;
`

const StyledSectionInner = styled.div`
  @media ${device.tablet} {
    margin-left: auto;
    margin-right: auto;
    max-width: 65%;
    padding: 0;
  }
`

const StyledH2 = styled.h2`
  color: ${colours.black};
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  padding: 0 2rem;

  @media ${device.tablet} {
    padding: 0;
  }
`

const StyledList = styled.ul`
  padding: 5rem 2rem 3rem 3.5rem;
  position: relative;

  @media ${device.tablet} {
    padding: 5rem 0rem 3rem 2.75rem;
  }

  &:before,
  &:after {
    font-size: 1.25rem;
    position: absolute;
    left: 55px;
    z-index: 10;
    content: '';
    display: block;
    line-height: normal;
    width: auto;
    color: ${colours.black};
  }

  &:before {
    content: "${new Date().getFullYear()}";
    top: -2px;
  }

  &:after {
    content: "2009";
    top: calc(100% - 21px);
  }
`

const StyledDivTimelineLine = styled.div`
  margin: 0 0 0 -2px;
  padding: 0;
  position: absolute;
  top: 0;
  left: 9px;
  z-index: 1;
  width: 4px;
  height: 100%;
  background: ${colours.black};
  margin-left: 1rem;

  @media ${device.tablet} {
    left: -3px;
  } 

  &:after,
  &:before {
    height: 18px;
    width: 18px;
    position: absolute;
    z-index: 1;
    content: "";
    border: 4px solid ${colours.black};
    border-radius: 50%;
    background: ${colours.black};
  }

  &:before {
    top: 0;
    left: -7px;
  }

  &:after {
    top: calc(100% - 18px);
    left: -7px;
  }
`

class Timeline extends React.Component {
  constructor() {
    super()
    this.state = {
      timelineData,
    }
  }

  render() {
    return (
      timelineData.length > 0 && (
        <StyledSection>
          <StyledSectionInner>
            <StyledH2>Professional timeline</StyledH2>
            <StyledList>
              {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
              ))}
              <StyledDivTimelineLine />
            </StyledList>
          </StyledSectionInner>
        </StyledSection>
      )
    )
  }
}

export default Timeline
