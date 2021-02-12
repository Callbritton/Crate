import { ADD_STYLE_SCORE, GET_STYLE_SCORE } from './actions'

// Initial State
const surveyInitialState = {
  score: 0
}

// State
export const survey = (state = surveyInitialState, action) => {
  switch (action.type) {
    case ADD_STYLE_SCORE:
      return {
        ...state,
        score: action.score
      }

    case GET_STYLE_SCORE:
      return {
        ...state,
        score: state.score
      }

    default:
      return state

  }
}
