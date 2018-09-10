import React from 'react'
import ReactDOM from 'react-dom'
import {App} from 'containers'
import {ThemeProvider} from 'styled-components'
import {theme} from 'theme'
import {Provider} from 'react-redux'
import store from 'redux/createStore'
import 'global-styles'

ReactDOM.render(
  (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  )
  ,
  document.getElementById("root"))
