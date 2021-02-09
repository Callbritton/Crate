import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { surveyData } from '../survey/surveyData'
import Question from '../survey/Question'
import Button from '../../ui/button/Button'
class Survey extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      complete: false,
      userChoices: []
    }
  }

  surveyQuestions = surveyData.questions.map(question => {
    return (
      <Question
        key={ question.id }
        id={ question.id }
        title={ question.title }
        choices={ question.choices }
      />
    )
  })


  render() {
    console.log(surveyData);

    return (
      <div>
        <div>
          <h1>Style Preferences</h1>
        </div>
        <div>
        <h3>Complete the survey below to find your style!</h3>
        { this.surveyQuestions }
        </div>
        <Button style={{ background: 'purple' }}>Show me my style</Button>
      </div>
    )
  }
}

export default Survey;
