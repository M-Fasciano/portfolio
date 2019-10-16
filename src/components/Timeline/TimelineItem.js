import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import colours from '../../styles/export/colours.scss'
import { device } from '../Global/device'

require('intersection-observer')

const StyledListItem = styled.li`
  margin-bottom: 2rem;
  position: relative;
  filter: drop-shadow(0 2px 0 rgba(0,0,0, .1));
  z-index: 2;

  &:before {
    content: '';
    height: 18px;
    width: 18px;
    position: absolute;
    top: 21px;
    right: calc(100% + 1.25rem);
    z-index: 5;
    border: 4px solid ${colours.black};
    border-radius: 50%;
    background: ${colours.white};
  }
`

const StyledListItemInner = styled.div`
  background-color: ${colours.white};
  border-radius: 5px;
  padding: 1rem;
  position: relative;
  filter: drop-shadow(0 2px 0 rgba(0,0,0, .1));
  z-index: 2;
  opacity: 0;
  transform: translate3d(20%,0,0);
  transition: opacity .35s cubic-bezier(.4,0,.2,1), transform .35s cubic-bezier(.4,0,.2,1);

  @media ${device.laptopL} {
    padding: 2rem;
  }

  &.active {
    opacity: 1;
    transform: translateZ(0);
  }

  &:after {
    content: '';
    position: absolute;
    top: 20px;
    right: 100%;
    height: 0;
    width: 0;
    border: 10px solid transparent;
    border-right: 10px solid ${colours.white};
  }

  h2,
  h3 {
    font-weight: bold;
    margin-bottom: .25rem;
  }

  h3 {
    font-size: 1rem;
  }

  span {
    color: ${colours.grey};
    display: inline-block;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: ${colours.grey};
    font-size: 1rem;
    line-height: 22px;
  }
`

const TimelineItem = props => {
  const [ref, inView] = useInView({
    threshold: 0.75,
    triggerOnce: true,
  })

  return (
    <StyledListItem ref={ref}>
      <StyledListItemInner className={inView ? 'active' : ''}>
        <h2>{props.data.title}</h2>
        <h3>{props.data.company}</h3>
        <span>{props.data.date}</span>
        <p>{props.data.desc}</p>
      </StyledListItemInner>
    </StyledListItem>
  )
}

export default TimelineItem
