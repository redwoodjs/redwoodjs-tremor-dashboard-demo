import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CompanyPerformanceForm from 'src/components/CompanyPerformance/CompanyPerformanceForm'

import type { CreateCompanyPerformanceInput } from 'types/graphql'

const CREATE_COMPANY_PERFORMANCE_MUTATION = gql`
  mutation CreateCompanyPerformanceMutation(
    $input: CreateCompanyPerformanceInput!
  ) {
    createCompanyPerformance(input: $input) {
      id
    }
  }
`

const NewCompanyPerformance = () => {
  const [createCompanyPerformance, { loading, error }] = useMutation(
    CREATE_COMPANY_PERFORMANCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CompanyPerformance created')
        navigate(routes.companyPerformances())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCompanyPerformanceInput) => {
    createCompanyPerformance({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New CompanyPerformance
        </h2>
      </header>
      <div className="rw-segment-main">
        <CompanyPerformanceForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewCompanyPerformance
