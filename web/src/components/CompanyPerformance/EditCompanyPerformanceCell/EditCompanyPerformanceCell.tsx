import type {
  EditCompanyPerformanceById,
  UpdateCompanyPerformanceInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CompanyPerformanceForm from 'src/components/CompanyPerformance/CompanyPerformanceForm'

export const QUERY = gql`
  query EditCompanyPerformanceById($id: Int!) {
    companyPerformance: companyPerformance(id: $id) {
      id
      date
      sales
      profit
      customers
    }
  }
`
const UPDATE_COMPANY_PERFORMANCE_MUTATION = gql`
  mutation UpdateCompanyPerformanceMutation(
    $id: Int!
    $input: UpdateCompanyPerformanceInput!
  ) {
    updateCompanyPerformance(id: $id, input: $input) {
      id
      date
      sales
      profit
      customers
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  companyPerformance,
}: CellSuccessProps<EditCompanyPerformanceById>) => {
  const [updateCompanyPerformance, { loading, error }] = useMutation(
    UPDATE_COMPANY_PERFORMANCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CompanyPerformance updated')
        navigate(routes.companyPerformances())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCompanyPerformanceInput,
    id: EditCompanyPerformanceById['companyPerformance']['id']
  ) => {
    updateCompanyPerformance({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CompanyPerformance {companyPerformance?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CompanyPerformanceForm
          companyPerformance={companyPerformance}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
