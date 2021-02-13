export const ADD_STYLE_SCORE = 'ADD_STYLE_SCORE';

//Add style score to State
export function saveStyle (styleScore) {
  return dispatch => {
    dispatch({
      type: ADD_STYLE_SCORE,
      score: styleScore
    })
  }

  return axios.post(routeApi, query({
    operation: '',
    variables: userCredentials,
    fields: ['user {name, email, role, style_survey}', 'token']
  }))
    .then(response => {
      let error = ''

      if (response.data.errors && response.data.errors.length > 0) {
        error = response.data.errors[0].message
      } else if (response.data.data.userLogin.token !== '') {
        const token = response.data.data.userLogin.token
        const user = response.data.data.userLogin.user

        dispatch(setUser(token, user))

        loginSetUserLocalStorageAndCookie(token, user)
      }

      dispatch({
        type: LOGIN_RESPONSE,
        error
      })
    })
    .catch(error => {
      dispatch({
        type: LOGIN_RESPONSE,
        error: 'Please try again'
      })
    })
}
