import type { Prisma, CompanyPerformance } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CompanyPerformanceCreateArgs>({
  companyPerformance: {
    one: {
      data: {
        date: 'String',
        sales: 4123311.0664987317,
        profit: 9629717.225889865,
        customers: 6552864,
      },
    },
    two: {
      data: {
        date: 'String',
        sales: 3407878.1655372214,
        profit: 6043919.859423452,
        customers: 4763215,
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  CompanyPerformance,
  'companyPerformance'
>
