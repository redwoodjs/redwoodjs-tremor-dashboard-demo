import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import KpiForm from 'src/components/Kpi/KpiForm'

import type { CreateKpiInput } from 'types/graphql'

const CREATE_KPI_MUTATION = gql`
  mutation CreateKpiMutation($input: CreateKpiInput!) {
    createKpi(input: $input) {
      id
    }
  }
`

const NewKpi = () => {
  const [createKpi, { loading, error }] = useMutation(CREATE_KPI_MUTATION, {
    onCompleted: () => {
      toast.success('Kpi created')
      navigate(routes.kpis())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateKpiInput) => {
    createKpi({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Kpi</h2>
      </header>
      <div className="rw-segment-main">
        <KpiForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewKpi
