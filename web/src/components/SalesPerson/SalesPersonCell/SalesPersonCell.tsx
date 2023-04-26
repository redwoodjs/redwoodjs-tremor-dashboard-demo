import type { FindSalesPersonById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SalesPerson from 'src/components/SalesPerson/SalesPerson'

export const QUERY = gql`
  query FindSalesPersonById($id: Int!) {
    salesPerson: salesPerson(id: $id) {
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

export const Empty = () => <div>SalesPerson not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  salesPerson,
}: CellSuccessProps<FindSalesPersonById>) => {
  return <SalesPerson salesPerson={salesPerson} />
}
