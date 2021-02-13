import { survey } from './state.js'
import * as actions from './actions.js'


describe('todosReducer', () => {
  it('should have an initial style score of 0', () => {
    const currentState = undefined
    const action = { type: null }

    const state = survey(currentState, action)

    expect(state).toEqual({ score: 0 })
  })

  // it('should add the style score', () => {
  //   const currentState = { score: 0 }
  //   const score = 29
  //   const action = actions.saveStyle(score)

  //   const state = survey(currentState, action)

  //   expect(state).toEqual({ score: 29 })
  // })

})