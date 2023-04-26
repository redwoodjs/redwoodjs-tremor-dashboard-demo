import type { SalesPerson } from '@prisma/client'

import {
  salesPeople,
  salesPerson,
  createSalesPerson,
  updateSalesPerson,
  deleteSalesPerson,
} from './salesPeople'
import type { StandardScenario } from './salesPeople.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('salesPeople', () => {
  scenario('returns all salesPeople', async (scenario: StandardScenario) => {
    const result = await salesPeople()

    expect(result.length).toEqual(Object.keys(scenario.salesPerson).length)
  })

  scenario(
    'returns a single salesPerson',
    async (scenario: StandardScenario) => {
      const result = await salesPerson({ id: scenario.salesPerson.one.id })

      expect(result).toEqual(scenario.salesPerson.one)
    }
  )

  scenario('creates a salesPerson', async () => {
    const result = await createSalesPerson({
      input: {
        name: 'String',
        leads: 4453508,
        sales: 'String',
        quota: 'String',
        variance: 'String',
        region: 'String',
        status: 'String',
        deltaType: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.leads).toEqual(4453508)
    expect(result.sales).toEqual('String')
    expect(result.quota).toEqual('String')
    expect(result.variance).toEqual('String')
    expect(result.region).toEqual('String')
    expect(result.status).toEqual('String')
    expect(result.deltaType).toEqual('String')
  })

  scenario('updates a salesPerson', async (scenario: StandardScenario) => {
    const original = (await salesPerson({
      id: scenario.salesPerson.one.id,
    })) as SalesPerson
    const result = await updateSalesPerson({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a salesPerson', async (scenario: StandardScenario) => {
    const original = (await deleteSalesPerson({
      id: scenario.salesPerson.one.id,
    })) as SalesPerson
    const result = await salesPerson({ id: original.id })

    expect(result).toEqual(null)
  })
})
