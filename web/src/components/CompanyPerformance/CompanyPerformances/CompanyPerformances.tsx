import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/CompanyPerformance/CompanyPerformancesCell'
import { truncate } from 'src/lib/formatters'

import type {
  DeleteCompanyPerformanceMutationVariables,
  FindCompanyPerformances,
} from 'types/graphql'

const DELETE_COMPANY_PERFORMANCE_MUTATION = gql`
  mutation DeleteCompanyPerformanceMutation($id: Int!) {
    deleteCompanyPerformance(id: $id) {
      id
    }
  }
`

const CompanyPerformancesList = ({
  companyPerformances,
}: FindCompanyPerformances) => {
  const [deleteCompanyPerformance] = useMutation(
    DELETE_COMPANY_PERFORMANCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CompanyPerformance deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onDeleteClick = (
    id: DeleteCompanyPerformanceMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete companyPerformance ' + id + '?')
    ) {
      deleteCompanyPerformance({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Sales</th>
            <th>Profit</th>
            <th>Customers</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {companyPerformances.map((companyPerformance) => (
            <tr key={companyPerformance.id}>
              <td>{truncate(companyPerformance.id)}</td>
              <td>{truncate(companyPerformance.date)}</td>
              <td>{truncate(companyPerformance.sales)}</td>
              <td>{truncate(companyPerformance.profit)}</td>
              <td>{truncate(companyPerformance.customers)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.companyPerformance({
                      id: companyPerformance.id,
                    })}
                    title={
                      'Show companyPerformance ' +
                      companyPerformance.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCompanyPerformance({
                      id: companyPerformance.id,
                    })}
                    title={'Edit companyPerformance ' + companyPerformance.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete companyPerformance ' + companyPerformance.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(companyPerformance.id)}
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

export default CompanyPerformancesList
