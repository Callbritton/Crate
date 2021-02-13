import { ADD_STYLE_SCORE } from './actions'
import { STYLE_SCORE_REQUEST, STYLE_SCORE_RESPONSE, STYLE_SCORE_FAILURE } from '../user/api/actions'

// Initial State
const surveyInitialState = {
  score: 0,
  error: null,
  isLoading: false
}

// State
export const survey = (state = surveyInitialState, action) => {
  switch (action.type) {
    case ADD_STYLE_SCORE:
      return {
        ...state,
        score: action.score
      }

    case STYLE_SCORE_REQUEST:
      return {
        ...state,
        error: action.error,
        isLoading: action.isLoading
      }

    case STYLE_SCORE_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: action.isLoading,
        score: action.userStyle
      }

    case STYLE_SCORE_FAILURE:
      return {
        ...state,
        error: action.error
      }

    default:
      return state

  }
}
