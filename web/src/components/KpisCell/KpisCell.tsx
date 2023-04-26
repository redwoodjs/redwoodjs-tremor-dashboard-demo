import type { KpisQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import KpiCard from '../KpiCard/KpiCard'

export const QUERY = gql`
  query KpisQuery {
    kpis {
      id
      title
      metric
      progress
      metricTarget
      delta
      deltaType
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ kpis }: CellSuccessProps<KpisQuery>) => {
  return (
    <>
      {kpis.map((item) => {
        return <KpiCard key={item.id} kpi={item} />
      })}
    </>
  )
}
