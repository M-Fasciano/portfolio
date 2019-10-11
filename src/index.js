import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/Layout/index'
import * as serviceWorker from './serviceWorker'
import ReactGA from 'react-ga'
ReactGA.initialize('G-5LHXMYF05D')
ReactGA.pageview(window.location.pathname + window.location.search)

require('../src/images/favicon.ico')
require('typeface-major-mono-display')

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
