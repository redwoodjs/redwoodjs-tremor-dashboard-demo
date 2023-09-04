import type { FindCompanyPerformanceById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CompanyPerformance from 'src/components/CompanyPerformance/CompanyPerformance'

export const QUERY = gql`
  query FindCompanyPerformanceById($id: Int!) {
    companyPerformance: companyPerformance(id: $id) {
      id
      date
      Sales
      Profit
      Customers
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CompanyPerformance not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  companyPerformance,
}: CellSuccessProps<FindCompanyPerformanceById>) => {
  return <CompanyPerformance companyPerformance={companyPerformance} />
}
