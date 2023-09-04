import { addDays, formatISO9075, startOfToday } from 'date-fns'

export type DailyPerformance = {
  date: string
  Sales: number
  Profit: number
  Customers: number
}
const today = startOfToday()
const formatDate = (date: Date) =>
  formatISO9075(date, { representation: 'date' })

export const performance: DailyPerformance[] = [
  {
    date: formatDate(addDays(today, 0)),
    Sales: 900.73,
    Profit: 173,
    Customers: 73,
  },
  {
    date: formatDate(addDays(today, 1)),
    Sales: 1000.74,
    Profit: 174.6,
    Customers: 74,
  },
  // ...
  {
    date: formatDate(addDays(today, 2)),
    Sales: 882,
    Profit: 682,
    Customers: 682,
  },
]
