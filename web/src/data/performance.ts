import { addDays, formatISO9075, startOfToday } from 'date-fns'

import type { PerformanceData } from 'src/components/ChartView/ChartView'

const today = startOfToday()
const formatDate = (date: Date) =>
  formatISO9075(date, { representation: 'date' })

export const performance: PerformanceData[] = [
  {
    date: formatDate(addDays(today, 0)),
    sales: 900.73,
    profit: 173,
    customers: 73,
  },
  {
    date: formatDate(addDays(today, 1)),
    sales: 1000.74,
    profit: 174.6,
    customers: 74,
  },
  // ...
  {
    date: formatDate(addDays(today, 2)),
    sales: 882,
    profit: 682,
    customers: 682,
  },
]
