import type { Prisma, Kpi } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.KpiCreateArgs>({
  kpi: {
    one: {
      data: {
        title: 'String',
        metric: 'String',
        progress: 6719983.289366991,
        metricTarget: 'String',
        delta: 'String',
        deltaType: 'String',
      },
    },
    two: {
      data: {
        title: 'String',
        metric: 'String',
        progress: 3140352.7857896686,
        metricTarget: 'String',
        delta: 'String',
        deltaType: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Kpi, 'kpi'>
