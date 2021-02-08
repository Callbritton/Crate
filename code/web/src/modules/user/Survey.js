import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import surveyData from './surveyData'
import Question from '../survey/Question'

class Survey extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      complete: false,
      userChoices: []
    }
  }

  questions = surveyData.questions.map(question => {
    return (
      <Question
        id={ question.id }
        title={ question.title }
        choices={ question.choices }
      />
    )
  })

  render() {
    return (
      <div>
        <div>
          <h1>Style Preferences</h1>
          <h3>Complete the survey below to find your style!</h3>
        </div>
        <div>
        { this.questions }
        </div>
      </div>
    )
  }
}
