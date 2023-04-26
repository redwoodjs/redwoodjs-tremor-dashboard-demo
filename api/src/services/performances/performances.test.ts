import { Prisma, Performance } from '@prisma/client'

import {
  performances,
  performance,
  createPerformance,
  updatePerformance,
  deletePerformance,
} from './performances'
import type { StandardScenario } from './performances.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('performances', () => {
  scenario('returns all performances', async (scenario: StandardScenario) => {
    const result = await performances()

    expect(result.length).toEqual(Object.keys(scenario.performance).length)
  })

  scenario(
    'returns a single performance',
    async (scenario: StandardScenario) => {
      const result = await performance({ id: scenario.performance.one.id })

      expect(result).toEqual(scenario.performance.one)
    }
  )

  scenario('creates a performance', async () => {
    const result = await createPerformance({
      input: {
        date: 'String',
        sales: 7647093.275374645,
        profit: 1686300.5750787363,
        customers: 6957797,
      },
    })

    expect(result.date).toEqual('String')
    expect(result.sales).toEqual(new Prisma.Decimal(7647093.275374645))
    expect(result.profit).toEqual(new Prisma.Decimal(1686300.5750787363))
    expect(result.customers).toEqual(6957797)
  })

  scenario('updates a performance', async (scenario: StandardScenario) => {
    const original = (await performance({
      id: scenario.performance.one.id,
    })) as Performance
    const result = await updatePerformance({
      id: original.id,
      input: { date: 'String2' },
    })

    expect(result.date).toEqual('String2')
  })

  scenario('deletes a performance', async (scenario: StandardScenario) => {
    const original = (await deletePerformance({
      id: scenario.performance.one.id,
    })) as Performance
    const result = await performance({ id: original.id })

    expect(result).toEqual(null)
  })
})
