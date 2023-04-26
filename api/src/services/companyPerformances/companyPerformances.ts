import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const companyPerformances: QueryResolvers['companyPerformances'] =
  () => {
    return db.companyPerformance.findMany()
  }

export const companyPerformance: QueryResolvers['companyPerformance'] = ({
  id,
}) => {
  return db.companyPerformance.findUnique({
    where: { id },
  })
}

export const createCompanyPerformance: MutationResolvers['createCompanyPerformance'] =
  ({ input }) => {
    return db.companyPerformance.create({
      data: input,
    })
  }

export const updateCompanyPerformance: MutationResolvers['updateCompanyPerformance'] =
  ({ id, input }) => {
    return db.companyPerformance.update({
      data: input,
      where: { id },
    })
  }

export const deleteCompanyPerformance: MutationResolvers['deleteCompanyPerformance'] =
  ({ id }) => {
    return db.companyPerformance.delete({
      where: { id },
    })
  }
