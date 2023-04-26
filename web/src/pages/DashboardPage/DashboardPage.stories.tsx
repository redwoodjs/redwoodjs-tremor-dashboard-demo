import type { ComponentMeta } from '@storybook/react'

import DashboardPage from './DashboardPage'

export const generated = () => {
  return <DashboardPage />
}

export default {
  title: 'Pages/DashboardPage',
  component: DashboardPage,
} as ComponentMeta<typeof DashboardPage>
