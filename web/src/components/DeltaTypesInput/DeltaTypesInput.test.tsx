import { render } from '@redwoodjs/testing/web'

import DeltaTypesInput from './DeltaTypesInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DeltaTypesInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeltaTypesInput />)
    }).not.toThrow()
  })
})
