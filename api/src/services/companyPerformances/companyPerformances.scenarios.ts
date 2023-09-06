import type { Prisma, CompanyPerformance } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CompanyPerformanceCreateArgs>({
  companyPerformance: {
    one: {
      data: {
        date: '2023-09-04T16:42:31.893Z',
        Sales: 4479699.532100878,
        Profit: 2344580.2038503485,
        Customers: 9995248,
      },
    },
    two: {
      data: {
        date: '2023-09-04T16:42:31.893Z',
        Sales: 7447966.365788998,
        Profit: 8766114.289045736,
        Customers: 7396524,
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  CompanyPerformance,
  'companyPerformance'
>
