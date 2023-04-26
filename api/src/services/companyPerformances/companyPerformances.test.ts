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
        date: 'String',
        sales: 5761634.78906294,
        profit: 4442964.207661537,
        customers: 5305792,
      },
    })

    expect(result.date).toEqual('String')
    expect(result.sales).toEqual(new Prisma.Decimal(5761634.78906294))
    expect(result.profit).toEqual(new Prisma.Decimal(4442964.207661537))
    expect(result.customers).toEqual(5305792)
  })

  scenario(
    'updates a companyPerformance',
    async (scenario: StandardScenario) => {
      const original = (await companyPerformance({
        id: scenario.companyPerformance.one.id,
      })) as CompanyPerformance
      const result = await updateCompanyPerformance({
        id: original.id,
        input: { date: 'String2' },
      })

      expect(result.date).toEqual('String2')
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
