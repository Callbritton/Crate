import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Question extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      choice: 0
    }
  }

  choices = this.props.choices.map(choice => {
    return (
      <div>
        <img src={ choice.image } alt={ choice.label }></img>
        <p>{ choice.label }</p>
      </div>
    )
  })

  render() {

    const { title, choices, id } = this.props;

    return (
      <div>
        <div>
          <h3>{ title }</h3>
        </div>
        <div>
        { this.choices }
        </div>
      </div>
    )
  }
}

export default Question;
