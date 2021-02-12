export const ADD_STYLE_SCORE = 'ADD_STYLE_SCORE';
export const GET_STYLE_SCORE = 'GET_STYLE_SCORE';

//Add style score to State
export function saveStyle (styleScore) {
  return dispatch => {
    dispatch({
      type: ADD_STYLE_SCORE,
      score: styleScore
    })
  }
}

export function getStyle () {
  return dispatch => {
    dispatch({
      type: GET_STYLE_SCORE
    })
  }
}
