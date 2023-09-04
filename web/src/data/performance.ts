import { addDays, startOfToday } from 'date-fns'

export type DailyPerformance = {
  date: Date
  Sales: number
  Profit: number
  Customers: number
}
const today = startOfToday()

export const performance: DailyPerformance[] = [
  {
    date: addDays(today, 0),
    Sales: 900.73,
    Profit: 173,
    Customers: 73,
  },
  {
    date: addDays(today, 1),
    Sales: 1000.74,
    Profit: 174.6,
    Customers: 74,
  },
  // ...
  {
    date: addDays(today, 2),
    Sales: 882,
    Profit: 682,
    Customers: 682,
  },
]
