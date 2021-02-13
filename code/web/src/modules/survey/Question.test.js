import { screen, render } from '@testing-library/react'
import "@testing-library/jest-dom"
import Question from "./Question"
import { surveyData } from './surveyData'


describe('Question', () => {
  it('should render the questions', () => {
    const question = surveyData.questions[0]
    render(
      <Question
        key={ question.id }
        id={ question.id }
        title={ question.title }
        choices={ question.choices }
        saveSelection={ this.saveSelection }
      />
    )
    
    const surveyQuestion = screen.getByText('Which vacation destination would you prefer?')
    expect(surveyQuestion).toBeInTheDocument()
  })
})