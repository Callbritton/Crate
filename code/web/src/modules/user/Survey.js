import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { surveyData } from '../survey/surveyData'
import Question from '../survey/Question'
import Button from '../../ui/button/Button'
import { Grid, GridCell } from '../../ui/grid'

class Survey extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      complete: false,
      userChoices: {q1: 0, q2: 0, q3: 0, q4: 0, q5: 0}
    }
  }

  saveSelection = (question, choice) => {
    this.setState({ userChoices: { ...this.state.userChoices, [question]: choice }})
    console.log("user choices", this.state.userChoices)
  }

  surveyQuestions = surveyData.questions.map(question => {
    return (
      <Question
        key={ question.id }
        id={ question.id }
        title={ question.title }
        choices={ question.choices }
        saveSelection={ this.saveSelection }
      />
    )
  })


  render() {
    console.log(surveyData);

    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: "solid black 1px"}}>
        <Grid>
          <GridCell>
            <h1>Style Preferences</h1>
          </GridCell>
        </Grid>
        <Grid>
          <GridCell>
          <h3>Complete the survey below to find your style!</h3>
          { this.surveyQuestions }
          </GridCell>
        </Grid>
        <Button style={{ background: 'purple' }}>Show me my style</Button>
      </div>
    )
  }
}

export default Survey;
