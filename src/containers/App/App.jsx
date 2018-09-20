import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {ImageUploader, Card, Form} from 'components'
import {saveSettings} from 'redux/settings'
import {saveImage, detectFace} from 'redux/emotion'
import {connect} from 'react-redux'

const App = (props) => (
  <div className={props.className}>
    <Card
      flip={(!props.settings || props.faceInfo) ? true : false}
      front={
        (
          <Fragment>
            <h3 style={{textAlign: 'center', margin: '10px 0px'}}>
              Upload your image to compare
            </h3>
            <ImageUploader upload={props.saveImage} />
            {
              props.uploadImage &&
                <button onClick={() => props.detectFace(props.uploadImage.link)}>Evaluate</button>
            }
          </Fragment>
        )
      }
      back={
        !props.settings ? (
          <Form
            title='Insert your api information'
            onSubmit={props.saveSettings}
            fields={{
              'subscription key': {
                value: '',
                type: 'password'
              },
              'client id': {
                value: '',
                type: 'password'
              }
            }}
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
  detectFace: PropTypes.func,
  saveImage: PropTypes.func,
  faceInfo: PropTypes.object,
  saveSettings: PropTypes.func,
  settings: PropTypes.object,
  uploadImage: PropTypes.object
}

export default connect(state => ({
  faceInfo: state.emotion.data,
  settings: state.settings.data,
  uploadImage: state.emotion.uploadImage
}), {saveSettings, saveImage, detectFace})(App)
