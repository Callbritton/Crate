import axios from 'axios'
import { mutation } from 'gql-query-builder'
import { routeApi } from '../../../setup/routes'

export const ADD_STYLE_SCORE = 'ADD_STYLE_SCORE';

//Add style score to State
export function saveStyle (styleScore) {
  return dispatch => {
    dispatch({
      type: ADD_STYLE_SCORE,
      score: styleScore
    })
  }
}
