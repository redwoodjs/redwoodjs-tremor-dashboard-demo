import { render } from '@redwoodjs/testing/web'

import DynamicDashboardPage from './DynamicDashboardPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DynamicDashboardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DynamicDashboardPage />)
    }).not.toThrow()
  })
})
