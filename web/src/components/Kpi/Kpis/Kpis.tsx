import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Kpi/KpisCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteKpiMutationVariables, FindKpis } from 'types/graphql'

const DELETE_KPI_MUTATION = gql`
  mutation DeleteKpiMutation($id: Int!) {
    deleteKpi(id: $id) {
      id
    }
  }
`

const KpisList = ({ kpis }: FindKpis) => {
  const [deleteKpi] = useMutation(DELETE_KPI_MUTATION, {
    onCompleted: () => {
      toast.success('Kpi deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteKpiMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete kpi ' + id + '?')) {
      deleteKpi({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Metric</th>
            <th>Progress</th>
            <th>Target</th>
            <th>Delta</th>
            <th>Delta type</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {kpis.map((kpi) => (
            <tr key={kpi.id}>
              <td>{truncate(kpi.id)}</td>
              <td>{truncate(kpi.title)}</td>
              <td>{truncate(kpi.metric)}</td>
              <td>{truncate(kpi.progress)}</td>
              <td>{truncate(kpi.target)}</td>
              <td>{truncate(kpi.delta)}</td>
              <td>{truncate(kpi.deltaType)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.kpi({ id: kpi.id })}
                    title={'Show kpi ' + kpi.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editKpi({ id: kpi.id })}
                    title={'Edit kpi ' + kpi.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete kpi ' + kpi.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(kpi.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default KpisList
