import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'

class ImageUploader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: ''
    }
    this.onChange = this.onChange.bind(this)
    this.send = this.send.bind(this)
    this.clear = this.clear.bind(this)
  }

  clear () {
    this.setState({
      url: ''
    })
  }

  send () {
    this.props.upload(this.state.url)
  }

  onChange (event) {
    const reader = new FileReader()
    reader.onload = (e) => {
      this.setState({
        url: e.target.result
      })
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0])
    }
  }

  render () {
    return (
      <div className={this.props.className}>
        <div className='preview-container'>
          {
            this.state.url ?
              <img src={this.state.url} alt='' /> :
              <img src='upload.png' alt='' />
          }
        </div>
        { !this.state.url && <input type='file' onChange={this.onChange} /> }
        {
          this.state.url && (
            <div className='button-container'>
              <button onClick={this.clear} className='btn-secondary' >
                Clear
              </button>
              <button onClick={this.send} className='btn-primary' >
                Send
              </button>
            </div>
          )
        }
      </div>
    )
  }
}

ImageUploader.propTypes = {
  className: PropTypes.string,
  upload: PropTypes.func.isRequired
}

export default ImageUploader
