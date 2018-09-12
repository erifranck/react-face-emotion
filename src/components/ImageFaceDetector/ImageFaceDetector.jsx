import React from 'react'
import PropTypes from 'prop-types'

const ImageFaceDetector = (props) => (
  <div className={props.className}>
    <img src={props.link} alt='' />
    <div className='detector' />
  </div>
)

ImageFaceDetector.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string
}

export default ImageFaceDetector
