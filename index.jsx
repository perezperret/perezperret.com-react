import React from 'react'
import ReactDOM from 'react-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './node_modules/normalize.css'
import './index.scss'

import App from './App'

library.add(faPlus)

const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
