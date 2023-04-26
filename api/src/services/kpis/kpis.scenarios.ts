import type { Prisma, Kpi } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.KpiCreateArgs>({
  kpi: {
    one: {
      data: {
        title: 'String',
        metric: 'String',
        progress: 1874703.2311725141,
        target: 'String',
        delta: 'String',
        deltaType: 'String',
      },
    },
    two: {
      data: {
        title: 'String',
        metric: 'String',
        progress: 2467605.0568852937,
        target: 'String',
        delta: 'String',
        deltaType: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Kpi, 'kpi'>
