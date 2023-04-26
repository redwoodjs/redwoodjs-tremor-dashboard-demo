import type { FindCompanyPerformances } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CompanyPerformances from 'src/components/CompanyPerformance/CompanyPerformances'

export const QUERY = gql`
  query FindCompanyPerformances {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No companyPerformances yet. '}
      <Link to={routes.newCompanyPerformance()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  companyPerformances,
}: CellSuccessProps<FindCompanyPerformances>) => {
  return <CompanyPerformances companyPerformances={companyPerformances} />
}
