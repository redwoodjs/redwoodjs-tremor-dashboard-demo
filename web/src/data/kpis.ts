import type { Kpi } from 'src/components/KpiCard/KpiCard'

export const kpis: Kpi[] = [
  {
    title: 'Sales',
    metric: '$ 12,699',
    progress: 15.9,
    metricTarget: '$ 80,000',
    delta: '13.2%',
    deltaType: 'moderateIncrease',
  },
  {
    title: 'Profit',
    metric: '$ 45,564',
    progress: 36.5,
    metricTarget: '$ 125,000',
    delta: '23.9%',
    deltaType: 'increase',
  },
  {
    title: 'Customers',
    metric: '1,072',
    progress: 53.6,
    metricTarget: '2,000',
    delta: '10.1%',
    deltaType: 'moderateDecrease',
  },
]
