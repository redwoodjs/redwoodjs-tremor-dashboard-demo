import type { Prisma, SalesPerson } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SalesPersonCreateArgs>({
  salesPerson: {
    one: {
      data: {
        name: 'String',
        leads: 3211613,
        sales: 'String',
        quota: 'String',
        variance: 'String',
        region: 'String',
        status: 'String',
        deltaType: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        leads: 4808544,
        sales: 'String',
        quota: 'String',
        variance: 'String',
        region: 'String',
        status: 'String',
        deltaType: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<SalesPerson, 'salesPerson'>
