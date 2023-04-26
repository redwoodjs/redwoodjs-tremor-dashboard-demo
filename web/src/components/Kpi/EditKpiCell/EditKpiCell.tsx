import type { EditKpiById, UpdateKpiInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import KpiForm from 'src/components/Kpi/KpiForm'

export const QUERY = gql`
  query EditKpiById($id: Int!) {
    kpi: kpi(id: $id) {
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
const UPDATE_KPI_MUTATION = gql`
  mutation UpdateKpiMutation($id: Int!, $input: UpdateKpiInput!) {
    updateKpi(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ kpi }: CellSuccessProps<EditKpiById>) => {
  const [updateKpi, { loading, error }] = useMutation(UPDATE_KPI_MUTATION, {
    onCompleted: () => {
      toast.success('Kpi updated')
      navigate(routes.kpis())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateKpiInput, id: EditKpiById['kpi']['id']) => {
    updateKpi({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Kpi {kpi?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <KpiForm kpi={kpi} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
