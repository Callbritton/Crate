
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { screen, render } from '@testing-library/react'

describe('Model Test', () => {
  it('should Crate has name and description', () => {
    expect(Crate).toEqual(name)
    expect(Crate).toEqual(description)
  })
})
