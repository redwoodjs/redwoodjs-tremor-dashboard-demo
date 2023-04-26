import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type { DeleteKpiMutationVariables, FindKpiById } from 'types/graphql'

const DELETE_KPI_MUTATION = gql`
  mutation DeleteKpiMutation($id: Int!) {
    deleteKpi(id: $id) {
      id
    }
  }
`

interface Props {
  kpi: NonNullable<FindKpiById['kpi']>
}

const Kpi = ({ kpi }: Props) => {
  const [deleteKpi] = useMutation(DELETE_KPI_MUTATION, {
    onCompleted: () => {
      toast.success('Kpi deleted')
      navigate(routes.kpis())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteKpiMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete kpi ' + id + '?')) {
      deleteKpi({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Kpi {kpi.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{kpi.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{kpi.title}</td>
            </tr>
            <tr>
              <th>Metric</th>
              <td>{kpi.metric}</td>
            </tr>
            <tr>
              <th>Progress</th>
              <td>{kpi.progress}</td>
            </tr>
            <tr>
              <th>Target</th>
              <td>{kpi.target}</td>
            </tr>
            <tr>
              <th>Delta</th>
              <td>{kpi.delta}</td>
            </tr>
            <tr>
              <th>Delta type</th>
              <td>{kpi.deltaType}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editKpi({ id: kpi.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(kpi.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Kpi
