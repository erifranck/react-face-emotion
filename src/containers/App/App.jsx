import React from 'react'
import PropTypes from 'prop-types'
import {ImageUploader, Card, Form} from 'components'
import {saveSettings} from 'redux/settings'
import {connect} from 'react-redux'

const App = (props) => (
  <div className={props.className}>
    <Card
      flip={!props.settings || props.faceInfo}
      front={
        ( <ImageUploader /> )
      }
      back={
        !props.settings ? (
          <Form
            title="Insert your api information"
            onSubmit={props.saveSettings}
            fields={
              {
                "subscription key": {
                  value: "",
                  type: "password"
                }
              }
            }
          />
        ) : (
          <div>
            here is emoji
          </div>
        )
      }
    />
  </div>
)

App.propTypes = {
  className: PropTypes.string,
  settings: PropTypes.object,
  saveSettings: PropTypes.func
}

export default connect(state => ({
  settings: state.settings.data
}), {saveSettings})(App)
