import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fields: props.fields
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(name) {
    return (event) => {
      const value = event.target.value
      this.setState((prevState) => ({
        fields: {
          ...prevState.fields,
          [name]: {
            ...prevState.fields[name],
            value
          }
        }
      }))
    }
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.fields)
    this.setState(() => ({
      fields: this.props.fields
    }))
  }
  render() {
    return (
      <form className={this.props.className} onSubmit={this.onSubmit}>
        <h3>
          {this.props.title}
        </h3>
        {
          Object.keys(this.state.fields).map(( item, index ) => (
            <input
              key={index}
              placeholder={item}
              onChange={this.onChange(item)}
              name={item}
              value={this.state.fields[item].value}
              type={this.state.fields[item].type}
            />
          ))
        }
        <div>
          <button type='submit' >Submit</button>
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  fields: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string
}

export default Form
