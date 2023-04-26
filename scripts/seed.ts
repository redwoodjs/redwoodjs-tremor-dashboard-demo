import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import { kpis } from 'web/src/data/kpis'
import { performance } from 'web/src/data/performance'
import { salesPeople } from 'web/src/data/salesPeople'

export default async () => {
  try {
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    Promise.all(
      kpis.map(async (data: Prisma.KpiCreateArgs['data']) => {
        const record = await db.kpi.create({ data })
        console.log(record)
      })
    )

    Promise.all(
      performance.map(
        async (data: Prisma.CompanyPerformanceCreateArgs['data']) => {
          const record = await db.companyPerformance.create({ data })
          console.log(record)
        }
      )
    )

    Promise.all(
      salesPeople.map(async (data: Prisma.SalesPersonCreateArgs['data']) => {
        const record = await db.salesPerson.create({ data })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
