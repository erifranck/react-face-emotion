import React from 'react'
import PropTypes from 'prop-types'
import {ImageUploader, Card, Form} from 'components'

const App = (props) => (
  <div className={props.className}>
    <Card
      front={
        ( <ImageUploader /> )
      }
      back={
        (
          <Form
            fields={
              {
                "subscription key": {
                  value: "",
                  type: "password"
                }
              }
            }
          />
        )
      }
    />
  </div>
)

App.propTypes = {
  className: PropTypes.string
}

export default App
