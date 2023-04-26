import type { TableViewsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TableView from '../TableView/TableView'

export const QUERY = gql`
  query TableViewsQuery {
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ salesPeople }: CellSuccessProps<TableViewsQuery>) => {
  return <TableView salesPeople={salesPeople} />
}
