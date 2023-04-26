import type { Prisma, Performance } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PerformanceCreateArgs>({
  performance: {
    one: {
      data: {
        date: 'String',
        sales: 4538259.864807015,
        profit: 6411478.733432643,
        customers: 9908280,
      },
    },
    two: {
      data: {
        date: 'String',
        sales: 4096944.9618545827,
        profit: 8036673.57768542,
        customers: 8191645,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Performance, 'performance'>
