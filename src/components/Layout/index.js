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

  // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('loader')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
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
