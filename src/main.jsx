import React from 'react'
import ReactDOM from 'react-dom/client'
import BitcoinIndex from './BitcoinIndex'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BitcoinIndex currency="AUD"/>
  </React.StrictMode>
)
