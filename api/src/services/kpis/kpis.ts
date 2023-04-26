import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const kpis: QueryResolvers['kpis'] = () => {
  return db.kpi.findMany()
}

export const kpi: QueryResolvers['kpi'] = ({ id }) => {
  return db.kpi.findUnique({
    where: { id },
  })
}

export const createKpi: MutationResolvers['createKpi'] = ({ input }) => {
  return db.kpi.create({
    data: input,
  })
}

export const updateKpi: MutationResolvers['updateKpi'] = ({ id, input }) => {
  return db.kpi.update({
    data: input,
    where: { id },
  })
}

export const deleteKpi: MutationResolvers['deleteKpi'] = ({ id }) => {
  return db.kpi.delete({
    where: { id },
  })
}
