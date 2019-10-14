import React from 'react'
import '../../styles/core.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import SEO from '../SEO/index'
import Header from '../Header/index'
import Content from '../Content/index'
import Footer from '../Footer/index'

library.add(fab)

class App extends React.Component {
  componentDidMount() {
    this.props.hideLoader()
  }
  
  render() {   
    return (
      <>
        <SEO />
        <Header />
        <Content />
        <Footer />
      </>
    )
  }
}

export default App
