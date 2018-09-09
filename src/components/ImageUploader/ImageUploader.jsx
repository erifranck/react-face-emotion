import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ImageUploader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ""
    }
  }
  render() {
    return (
      <div className={this.props.className}>
        <div className="preview-container">
          <img src="" alt="" />
        </div>
        <input type="file" />
      </div>
    )
  }
}

ImageUploader.propTypes = {
  className: PropTypes.string
}

export default ImageUploader
