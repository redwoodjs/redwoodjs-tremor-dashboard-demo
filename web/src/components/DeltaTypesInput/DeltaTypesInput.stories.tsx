// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DeltaTypesInput> = (args) => {
//   return <DeltaTypesInput {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DeltaTypesInput from './DeltaTypesInput'

export const generated = () => {
  return <DeltaTypesInput />
}

export default {
  title: 'Components/DeltaTypesInput',
  component: DeltaTypesInput,
} as ComponentMeta<typeof DeltaTypesInput>
