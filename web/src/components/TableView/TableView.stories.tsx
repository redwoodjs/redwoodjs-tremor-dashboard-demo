// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TableView> = (args) => {
//   return <TableView {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TableView from './TableView'

export const generated = () => {
  return <TableView />
}

export default {
  title: 'Components/TableView',
  component: TableView,
} as ComponentMeta<typeof TableView>
