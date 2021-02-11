import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { surveyData } from '../survey/surveyData'
import Question from '../survey/Question'
import Button from '../../ui/button/Button'
import { Grid, GridCell } from '../../ui/grid'
import userRoutes from '../../setup/routes/user'
import { Link, withRouter } from 'react-router-dom'
import { messageShow, messageHide } from '../common/api/actions'
import { primary } from '../../ui/common/gradients'
import { white } from '../../ui/common/colors'


class Survey extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      complete: false,
      userChoices: {q1: 0, q2: 0, q3: 0, q4: 0, q5: 0},
      styleNum: 0,
      isComplete: false
    }
  }

  saveSelection = (question, choice) => {
    this.setState({ userChoices: { ...this.state.userChoices, [question]: choice }})
    console.log("user choices", this.state.userChoices)
  }

  determineStyleNum = (nums) => {
    let store = nums,
    distribution = {},
    max = 0,
    result = [];
    store.forEach((a) => {
      distribution[a] = (distribution[a] || 0) + 1;
      if (distribution[a] > max) {
          max = distribution[a];
          result = [a];
          return;
      }
      if (distribution[a] === max) {
          result.push(a);
      }

    });
    return result[0]
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.checkCompletion()) {
      const userAnswers = Object.values(this.state.userChoices)
      let result = this.determineStyleNum(userAnswers)
      this.setState({ styleNum: result, isComplete: true })
      this.props.history.push(userRoutes.profile.path)
    } else {
      this.props.messageShow('Please answer all questions');
    }
  }

  checkCompletion = () => {
    const userAnswers = Object.values(this.state.userChoices);
    return (userAnswers.includes(0)) ? false : true
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
    return (
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', border: "solid black 1px"}}>
        <Grid>
          <GridCell>
            <h1>Style Preferences</h1>
          </GridCell>
        </Grid>
        <Grid>
          <GridCell>
          <h3 style={{ marginTop: '1.5em' }}>
              Complete the survey below to find your style!
          </h3>
          { this.surveyQuestions }
          </GridCell>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={ this.handleSubmit } style={{ marginTop: '0.5em', background: primary, color: white }}>Show me my style</Button>
        </div>
      </div>
    )
  }
}

export default connect(null, { messageShow, messageHide })(withRouter(Survey));
