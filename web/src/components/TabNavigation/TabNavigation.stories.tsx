// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TabNavigation> = (args) => {
//   return <TabNavigation {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TabNavigation from './TabNavigation'

export const generated = () => {
  return <TabNavigation />
}

export default {
  title: 'Components/TabNavigation',
  component: TabNavigation,
} as ComponentMeta<typeof TabNavigation>
