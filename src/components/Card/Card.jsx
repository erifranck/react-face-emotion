import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Card = (props) => (
  <div className={props.className}>
    <div className={ cn( { "card-content": true, flip: props.flip } ) }>
      <div className="front">
        {props.front}
      </div>
      <div className="back">
        {props.back}
      </div>
    </div>
  </div>
)

Card.propTypes = {
  className: PropTypes.string,
  front: PropTypes.node,
  back: PropTypes.node,
  flip: PropTypes.bool
}

export default Card
