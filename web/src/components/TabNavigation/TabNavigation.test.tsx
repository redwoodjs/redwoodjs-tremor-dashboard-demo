import { render } from '@redwoodjs/testing/web'

import TabNavigation from './TabNavigation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TabNavigation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TabNavigation />)
    }).not.toThrow()
  })
})
