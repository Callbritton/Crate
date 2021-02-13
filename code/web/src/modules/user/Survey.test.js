import React from 'react'
import { screen, render } from '@testing-library/react'
import "@testing-library/jest-dom"
import Survey from './Survey'
import { store } from "../../setup/store.js";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import userEvent from '@testing-library/user-event'

describe('Survey', () => {
  it('should render the Survey', () => {
    let history = createMemoryHistory()
    render(
      <Provider store={store}>
        <Router history={history}>
          <Survey />
        </Router>
      </Provider>
      )
    
    const surveyHeader = screen.getByText('Style Preferences')
    const questionOne = screen.getByText('Which vacation destination would you prefer?')
    expect(surveyHeader).toBeInTheDocument()
    expect(questionOne).toBeInTheDocument()
  })

  it('should not route if form has not been completed', () => {
    let history = createMemoryHistory()
    render(
      <Provider store={store}>
        <Router history={history}>
          <Survey />
        </Router>
      </Provider>
      )

    const submitButton = screen.getByText('Show me my style')
    userEvent.click(submitButton)
    expect('Please answer all questions').toBeInTheDocument()
  })
})