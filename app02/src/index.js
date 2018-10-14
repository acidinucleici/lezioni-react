import React from 'react'
import ReactDOM from 'react-dom'
import WebfontLoader from '@dr-kobros/react-webfont-loader'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// webfontloader configuration object. *REQUIRED*.
const config = {
    google: {
      families: ['Source Sans Pro:300,600'],
    }
}
   
// Callback receives the status of the general webfont loading process. *OPTIONAL*
const callback = status => {
    // I could hook the webfont status to for example Redux here.
}

ReactDOM.render(<WebfontLoader config={config} onStatus={callback}><App /></WebfontLoader>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
