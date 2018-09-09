import React, {Component} from 'react'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fields: props.fields
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(name) {
    return (event) => {
      const value = event.target.value
      this.setState((prevState) => ({
        fields: {
          [name]: {
            ...prevState.fields[name],
            value
          }
        }
      }))
    }
  }
  onSubmit() {
    this.props.onSubmit(this.fields)
    this.setState(() => ({
      fields: this.props.fields
    }))
  }
  render() {
    return (
      <form>
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
          <button onSubmit={this.onSubmit}>Submit</button>
        </div>
      </form>
    )
  }
}

export default Form
