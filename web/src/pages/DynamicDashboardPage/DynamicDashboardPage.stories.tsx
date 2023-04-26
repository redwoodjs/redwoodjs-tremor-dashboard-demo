import type { ComponentMeta } from '@storybook/react'

import DynamicDashboardPage from './DynamicDashboardPage'

export const generated = () => {
  return <DynamicDashboardPage />
}

export default {
  title: 'Pages/DynamicDashboardPage',
  component: DynamicDashboardPage,
} as ComponentMeta<typeof DynamicDashboardPage>
