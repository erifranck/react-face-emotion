import React from 'react'
import PropTypes from 'prop-types'
import {ImageUploader} from 'components'

const App = (props) => (
  <div className={props.className}>
    <ImageUploader />
  </div>
)

App.propTypes = {
  className: PropTypes.string
}

export default App
