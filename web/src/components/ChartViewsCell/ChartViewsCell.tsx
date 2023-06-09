import type { ChartViewsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ChartView from 'src/components/ChartView/ChartView'

export const QUERY = gql`
  query ChartViewsQuery {
    companyPerformances {
      id
      date
      sales
      profit
      customers
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  companyPerformances,
}: CellSuccessProps<ChartViewsQuery>) => {
  return <ChartView performance={companyPerformances} />
}
