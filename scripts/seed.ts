import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import { kpis } from 'web/src/data/kpis'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data: Prisma.KpiCreateArgs['data'][] = kpis

    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      data.map(async (data: Prisma.KpiCreateArgs['data']) => {
        const record = await db.kpi.create({ data })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
