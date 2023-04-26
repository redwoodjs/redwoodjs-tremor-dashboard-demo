import type { FindKpiById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Kpi from 'src/components/Kpi/Kpi'

export const QUERY = gql`
  query FindKpiById($id: Int!) {
    kpi: kpi(id: $id) {
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

export const Empty = () => <div>Kpi not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ kpi }: CellSuccessProps<FindKpiById>) => {
  return <Kpi kpi={kpi} />
}
