import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {ImageUploader, Card, Form} from 'components'
import {saveSettings} from 'redux/settings'
import {connect} from 'react-redux'

const App = (props) => (
  <div className={props.className}>
    <Card
      flip={!props.settings || props.faceInfo}
      front={
        (
          <Fragment>
            <h3 style={{textAlign: "center", margin: "10px 0px"}}>
              Upload your image to compare
            </h3>
            <ImageUploader />
          </Fragment>
        )
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
