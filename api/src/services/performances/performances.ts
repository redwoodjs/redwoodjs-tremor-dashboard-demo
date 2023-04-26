import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const performances: QueryResolvers['performances'] = () => {
  return db.performance.findMany()
}

export const performance: QueryResolvers['performance'] = ({ id }) => {
  return db.performance.findUnique({
    where: { id },
  })
}

export const createPerformance: MutationResolvers['createPerformance'] = ({
  input,
}) => {
  return db.performance.create({
    data: input,
  })
}

export const updatePerformance: MutationResolvers['updatePerformance'] = ({
  id,
  input,
}) => {
  return db.performance.update({
    data: input,
    where: { id },
  })
}

export const deletePerformance: MutationResolvers['deletePerformance'] = ({
  id,
}) => {
  return db.performance.delete({
    where: { id },
  })
}
