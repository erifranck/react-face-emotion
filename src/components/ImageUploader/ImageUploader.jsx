import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ImageUploader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ""
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange() {

  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="preview-container">
          {
            this.state.url ?
              <img src={this.state.url} alt="" /> :
              <img src="upload.png" alt=""/>
          }
        </div>
        <input type="file" onChange={this.onChange}/>
      </div>
    )
  }
}

ImageUploader.propTypes = {
  className: PropTypes.string
}

export default ImageUploader
