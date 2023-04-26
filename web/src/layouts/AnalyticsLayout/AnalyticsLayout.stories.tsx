import type { ComponentMeta, ComponentStory } from '@storybook/react'

import AnalyticsLayout from './AnalyticsLayout'

export const generated: ComponentStory<typeof AnalyticsLayout> = (args) => {
  return <AnalyticsLayout {...args} />
}

export default {
  title: 'Layouts/AnalyticsLayout',
  component: AnalyticsLayout,
} as ComponentMeta<typeof AnalyticsLayout>
