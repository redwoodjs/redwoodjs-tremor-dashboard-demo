import { Prisma, Kpi } from '@prisma/client'

import { kpis, kpi, createKpi, updateKpi, deleteKpi } from './kpis'
import type { StandardScenario } from './kpis.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('kpis', () => {
  scenario('returns all kpis', async (scenario: StandardScenario) => {
    const result = await kpis()

    expect(result.length).toEqual(Object.keys(scenario.kpi).length)
  })

  scenario('returns a single kpi', async (scenario: StandardScenario) => {
    const result = await kpi({ id: scenario.kpi.one.id })

    expect(result).toEqual(scenario.kpi.one)
  })

  scenario('creates a kpi', async () => {
    const result = await createKpi({
      input: {
        title: 'String',
        metric: 'String',
        progress: 8365966.92490519,
        metricTarget: 'String',
        delta: 'String',
        deltaType: 'String',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.metric).toEqual('String')
    expect(result.progress).toEqual(new Prisma.Decimal(8365966.92490519))
    expect(result.metricTarget).toEqual('String')
    expect(result.delta).toEqual('String')
    expect(result.deltaType).toEqual('String')
  })

  scenario('updates a kpi', async (scenario: StandardScenario) => {
    const original = (await kpi({ id: scenario.kpi.one.id })) as Kpi
    const result = await updateKpi({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a kpi', async (scenario: StandardScenario) => {
    const original = (await deleteKpi({ id: scenario.kpi.one.id })) as Kpi
    const result = await kpi({ id: original.id })

    expect(result).toEqual(null)
  })
})
