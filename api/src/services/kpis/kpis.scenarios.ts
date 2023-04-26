import type { Prisma, Kpi } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.KpiCreateArgs>({
  kpi: {
    one: {
      data: {
        title: 'String',
        metric: 'String',
        progress: 6449707.3096365165,
        target: 'String',
        delta: 'String',
        deltaType: 'String',
      },
    },
    two: {
      data: {
        title: 'String',
        metric: 'String',
        progress: 8938033.002605945,
        target: 'String',
        delta: 'String',
        deltaType: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Kpi, 'kpi'>
