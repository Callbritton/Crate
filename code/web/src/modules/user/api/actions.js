// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'
import cookie from 'js-cookie'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
// These are all coming from '/state'
export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST'
export const LOGIN_RESPONSE = 'AUTH/LOGIN_RESPONSE'
export const SET_USER = 'AUTH/SET_USER'
export const LOGOUT = 'AUTH/LOGOUT'
export const STYLE_SCORE_REQUEST = 'AUTH/STYLE_SCORE_REQUEST'
export const STYLE_SCORE_RESPONSE = 'AUTH/STYLE_SCORE_RESPONSE'
export const STYLE_SCORE_FAILURE = 'AUTH/STYLE_SCORE_FAILURE'
export const GET_STYLE_SCORE = 'GET_STYLE_SCORE'

// Actions

// Set a user after login or using localStorage token
export function setUser(token, user) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }

  return { type: SET_USER, user }
}

// Login a user using credentials
export function login(userCredentials, isLoading = true) {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
      isLoading
    })

    return axios.post(routeApi, query({
      operation: 'userLogin',
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
}

export function updateUser(userDetails, styleScore) {
  console.log("Details", userDetails)

  return dispatch => {
    dispatch({
      type: GET_STYLE_SCORE,
      details: { name: userDetails.name, role: userDetails.role, email: userDetails.email, style_survey: styleScore }
    })

    return axios.post(routeApi, mutation({
      operation: 'userUpdate',
      variables: {
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role,
        style_survey: styleScore
      },
      fields: ['name, email, role, style_survey']
    }))
  }
}

// Set user token and info in localStorage and cookie
export function loginSetUserLocalStorageAndCookie(token, user) {
  // Update token
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('user', JSON.stringify(user))

  // Set cookie for SSR
  cookie.set('auth', { token, user }, { path: '/' })
}

// Register a user
export function register(userDetails) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'userSignup',
      variables: userDetails,
      fields: ['id', 'name', 'email']
    }))
  }
}

// Log out user and remove token from localStorage
export function logout() {
  return dispatch => {
    logoutUnsetUserLocalStorageAndCookie()

    dispatch({
      type: LOGOUT
    })
  }
}

// Unset user token and info in localStorage and cookie
export function logoutUnsetUserLocalStorageAndCookie() {
  // Remove token
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')

  // Remove cookie
  cookie.remove('auth')
}

// Get user gender
export function getGenders() {
  return dispatch => {
    return axios.post(routeApi, query({
      operation: 'userGenders',
      fields: ['id', 'name']
    }))
  }
}

export function getStyle(isLoading = true) {
  return dispatch => {
    dispatch({
      type: STYLE_SCORE_REQUEST,
      error: null,
      isLoading
    })

  return axios.post(routeApi, query({
    operation: 'styleByUser',
    fields: ['id', 'description', 'image_url']
  }))
    .then(response => {
      if (response.status === 200) {
        dispatch({
          type: STYLE_SCORE_RESPONSE,
          error: null,
          isLoading: false,
          userStyle: response.data.styleByUser
        })
      } else {
        console.error(response)
      }
    })
    .catch(error => {
      dispatch({
        type: STYLE_SCORE_FAILURE,
        error: 'Some error occurred. Please try again.',
        isLoading: false
      })
    })
  }
}
