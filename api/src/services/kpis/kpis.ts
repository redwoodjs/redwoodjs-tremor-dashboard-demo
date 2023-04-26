import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

const parseDollarAmount = (amount: string) => {
  // Remove commas and dollar signs from the string
  amount = amount.replace(/,|\$/g, '');

  // Parse the string as a float
  const floatAmount = parseFloat(amount);

  // Return the float value
  return floatAmount;
}

const calculateProgress = ({ input }) => {
  const metricValue = parseDollarAmount(input.metric);
  const metricTargetValue = parseDollarAmount(input.metricTarget);
  const progress = ((metricValue / metricTargetValue) * 100).toFixed(1);

  return progress
}

export const kpis: QueryResolvers['kpis'] = () => {
  return db.kpi.findMany()
}

export const kpi: QueryResolvers['kpi'] = ({ id }) => {
  return db.kpi.findUnique({
    where: { id },
  })
}

export const createKpi: MutationResolvers['createKpi'] = ({ input }) => {
  const progress = calculateProgress({input})

  return db.kpi.create({
    data: { ...input, progress },
  })
}

export const updateKpi: MutationResolvers['updateKpi'] = ({ id, input }) => {
  const progress = calculateProgress({input})
  logger.debug({progress}, 'updateKpi')
  return db.kpi.update({
    data: {... input, progress},
    where: { id },
  })
}

export const deleteKpi: MutationResolvers['deleteKpi'] = ({ id }) => {
  return db.kpi.delete({
    where: { id },
  })
}
