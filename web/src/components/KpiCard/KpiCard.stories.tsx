// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof KpiCard> = (args) => {
//   return <KpiCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { kpis } from 'src/data/kpis'

import KpiCard from './KpiCard'

export const generated = () => {
  return <KpiCard kpi={kpis[0]} />
}

export const moderateIncrease = () => {
  return <KpiCard kpi={kpis[0]} />
}

export const increase = () => {
  return <KpiCard kpi={kpis[1]} />
}

export const moderateDecrease = () => {
  return <KpiCard kpi={kpis[2]} />
}
export default {
  title: 'Components/KpiCard',
  component: KpiCard,
} as ComponentMeta<typeof KpiCard>
