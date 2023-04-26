// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ChartView> = (args) => {
//   return <ChartView {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { performance } from 'src/data/performance'

import ChartView from './ChartView'
export const generated = () => {
  return <ChartView performance={performance} />
}

export default {
  title: 'Components/ChartView',
  component: ChartView,
} as ComponentMeta<typeof ChartView>
