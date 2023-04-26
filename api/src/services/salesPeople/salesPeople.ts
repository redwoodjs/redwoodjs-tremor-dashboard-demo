import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const salesPeople: QueryResolvers['salesPeople'] = () => {
  return db.salesPerson.findMany()
}

export const salesPerson: QueryResolvers['salesPerson'] = ({ id }) => {
  return db.salesPerson.findUnique({
    where: { id },
  })
}

export const createSalesPerson: MutationResolvers['createSalesPerson'] = ({
  input,
}) => {
  return db.salesPerson.create({
    data: input,
  })
}

export const updateSalesPerson: MutationResolvers['updateSalesPerson'] = ({
  id,
  input,
}) => {
  return db.salesPerson.update({
    data: input,
    where: { id },
  })
}

export const deleteSalesPerson: MutationResolvers['deleteSalesPerson'] = ({
  id,
}) => {
  return db.salesPerson.delete({
    where: { id },
  })
}
