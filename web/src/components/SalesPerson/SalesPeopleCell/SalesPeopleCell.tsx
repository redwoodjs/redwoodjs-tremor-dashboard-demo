import type { FindSalesPeople } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SalesPeople from 'src/components/SalesPerson/SalesPeople'

export const QUERY = gql`
  query FindSalesPeople {
    salesPeople {
      id
      name
      leads
      sales
      quota
      variance
      region
      status
      deltaType
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No salesPeople yet. '}
      <Link to={routes.newSalesPerson()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ salesPeople }: CellSuccessProps<FindSalesPeople>) => {
  return <SalesPeople salesPeople={salesPeople} />
}
