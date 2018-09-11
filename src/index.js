import React from 'react'
import ReactDOM from 'react-dom'
import {App} from 'containers'
import {ThemeProvider} from 'styled-components'
import {theme} from 'theme'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, {persistor} from 'redux/createStore'
import 'global-styles'

ReactDOM.render(
  (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
  ,
  document.getElementById('root'))
