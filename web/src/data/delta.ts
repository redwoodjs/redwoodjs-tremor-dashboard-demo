import { DeltaType } from '@tremor/react'

export const deltaTypes: { [key: string]: DeltaType } = {
  average: 'unchanged',
  overperforming: 'moderateIncrease',
  underperforming: 'moderateDecrease',
}
