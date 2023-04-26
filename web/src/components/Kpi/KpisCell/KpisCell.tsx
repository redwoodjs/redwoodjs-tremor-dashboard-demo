import type { FindKpis } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Kpis from 'src/components/Kpi/Kpis'

export const QUERY = gql`
  query FindKpis {
    kpis {
      id
      title
      metric
      progress
      target
      delta
      deltaType
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No kpis yet. '}
      <Link to={routes.newKpi()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ kpis }: CellSuccessProps<FindKpis>) => {
  return <Kpis kpis={kpis} />
}
