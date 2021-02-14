import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { surveyData } from '../survey/surveyData'
import Question from '../survey/Question'
import Button from '../../ui/button/Button'
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import userRoutes from '../../setup/routes/user'
import { Link, withRouter } from 'react-router-dom'
import { messageShow, messageHide } from '../common/api/actions'
import { primary } from '../../ui/common/gradients'
import { white, grey, grey2 } from '../../ui/common/colors'
import { saveStyle } from '../survey/api/actions'
import { updateUser, getStyle } from './api/actions'

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

  handleSubmit = async (e) => {
    e.preventDefault()
    if (this.checkCompletion()) {
      const userAnswers = Object.values(this.state.userChoices)
      let result = this.determineStyleNum(userAnswers)
      this.setState({ styleNum: result, isComplete: true })
      this.props.saveStyle(result)
      await this.props.updateUser(this.props.user.details, result)
      await this.props.getStyle(this.props.user.details)
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
      <div style={{padding: '2em', textAlign: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column', border: "solid black 1px"}}>
        <Grid style={{ padding: '1em', backgroundColor: grey }}>
          <GridCell>
            <H3 font="secondary">Style Preferences</H3>
            <p style={{ marginTop: '1em', color: grey2 }}>
            Complete the survey below to find your style!
            </p>
          </GridCell>
        </Grid>
        <Grid>
          <GridCell>
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

// Component State
function surveyState(state) {
  return {
    user: state.user,
  }
}

export default connect(surveyState, { messageShow, messageHide, saveStyle, updateUser, getStyle })(withRouter(Survey));
