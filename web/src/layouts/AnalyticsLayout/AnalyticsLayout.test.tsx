import { render } from '@redwoodjs/testing/web'

import AnalyticsLayout from './AnalyticsLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AnalyticsLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnalyticsLayout />)
    }).not.toThrow()
  })
})
