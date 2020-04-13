import React from 'react'
import * as Styled from './Styled'

import Title from './Title'
import Intro from './Intro'
import Particles from './Particles'

const Header = () => (
  <Styled.Header>
    <div>
      <Styled.H1>michele fAsciAno</Styled.H1>
      <Title />
      <Intro />
      <Particles />
    </div>
  </Styled.Header>
)

export default Header
