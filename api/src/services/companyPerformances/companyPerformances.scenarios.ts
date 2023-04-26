import type { Prisma, CompanyPerformance } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CompanyPerformanceCreateArgs>({
  companyPerformance: {
    one: {
      data: {
        date: 'String',
        sales: 8843684.347021867,
        profit: 9611808.510614885,
        customers: 5625131,
      },
    },
    two: {
      data: {
        date: 'String',
        sales: 3070413.2076589284,
        profit: 7130760.773069442,
        customers: 5044618,
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  CompanyPerformance,
  'companyPerformance'
>
