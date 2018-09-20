import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {ImageUploader, Card, Form, ImageFaceDetector} from 'components'
import {saveSettings} from 'redux/settings'
import {saveImage, detectFace} from 'redux/emotion'
import {connect} from 'react-redux'

const imgurClientId = JSON.stringify(process.env.REACT_APP_IMGUR_CLIENT_ID)
const microsoftKey = JSON.stringify(process.env.REACT_APP_MICROSOFT_APIKEY)

const App = (props) => (
  <div className={props.className}>
    {props.loading && <p>loading...</p>}
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
                (
                  <Fragment>
                    <button onClick={props.detectFace(props.uploadImage.link)}>detect face</button>
                  </Fragment>
                )
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
                value: microsoftKey,
                type: 'password'
              },
              'client id': {
                value: imgurClientId,
                type: 'password'
              }
            }}
          />
        ) : (
          props.faceInfo &&
            <ImageFaceDetector
              link={props.uploadImage.link}
              width={props.faceInfo[0].faceRectangle.width}
              height={props.faceInfo[0].faceRectangle.height}
              top={props.faceInfo[0].faceRectangle.top}
              left={props.faceInfo[0].faceRectangle.left}
            />
        )
      }
    />
  </div>
)

App.propTypes = {
  className: PropTypes.string,
  detectFace: PropTypes.func,
  detectEmotion: PropTypes.func,
  saveImage: PropTypes.func,
  loading: PropTypes.bool,
  saveSettings: PropTypes.func,
  settings: PropTypes.object,
  faceInfo: PropTypes.array,
  uploadImage: PropTypes.object
}

export default connect(state => ({
  faceInfo: state.emotion.data,
  loading: state.emotion.loading,
  settings: state.settings.data,
  uploadImage: state.emotion.uploadImage
}), dispatch => ({
  saveSettings: (data) => dispatch(saveSettings(data)),
  saveImage: (img) => dispatch(saveImage(img)),
  detectFace: (img) => () => dispatch(detectFace(img))
}))(App)
