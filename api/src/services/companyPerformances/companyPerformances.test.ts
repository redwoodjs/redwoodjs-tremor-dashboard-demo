import { Prisma, CompanyPerformance } from '@prisma/client'

import {
  companyPerformances,
  companyPerformance,
  createCompanyPerformance,
  updateCompanyPerformance,
  deleteCompanyPerformance,
} from './companyPerformances'
import type { StandardScenario } from './companyPerformances.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('companyPerformances', () => {
  scenario(
    'returns all companyPerformances',
    async (scenario: StandardScenario) => {
      const result = await companyPerformances()

      expect(result.length).toEqual(
        Object.keys(scenario.companyPerformance).length
      )
    }
  )

  scenario(
    'returns a single companyPerformance',
    async (scenario: StandardScenario) => {
      const result = await companyPerformance({
        id: scenario.companyPerformance.one.id,
      })

      expect(result).toEqual(scenario.companyPerformance.one)
    }
  )

  scenario('creates a companyPerformance', async () => {
    const result = await createCompanyPerformance({
      input: {
        date: '2023-09-04T16:42:31.883Z',
        Sales: 1710517.558160818,
        Profit: 378941.0764930223,
        Customers: 3647439,
      },
    })

    expect(result.date).toEqual(new Date('2023-09-04T16:42:31.883Z'))
    expect(result.Sales).toEqual(new Prisma.Decimal(1710517.558160818))
    expect(result.Profit).toEqual(new Prisma.Decimal(378941.0764930223))
    expect(result.Customers).toEqual(3647439)
  })

  scenario(
    'updates a companyPerformance',
    async (scenario: StandardScenario) => {
      const original = (await companyPerformance({
        id: scenario.companyPerformance.one.id,
      })) as CompanyPerformance
      const result = await updateCompanyPerformance({
        id: original.id,
        input: { date: '2023-09-05T16:42:31.883Z' },
      })

      expect(result.date).toEqual(new Date('2023-09-05T16:42:31.883Z'))
    }
  )

  scenario(
    'deletes a companyPerformance',
    async (scenario: StandardScenario) => {
      const original = (await deleteCompanyPerformance({
        id: scenario.companyPerformance.one.id,
      })) as CompanyPerformance
      const result = await companyPerformance({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
