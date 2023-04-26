import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteCompanyPerformanceMutationVariables,
  FindCompanyPerformanceById,
} from 'types/graphql'

const DELETE_COMPANY_PERFORMANCE_MUTATION = gql`
  mutation DeleteCompanyPerformanceMutation($id: Int!) {
    deleteCompanyPerformance(id: $id) {
      id
    }
  }
`

interface Props {
  companyPerformance: NonNullable<
    FindCompanyPerformanceById['companyPerformance']
  >
}

const CompanyPerformance = ({ companyPerformance }: Props) => {
  const [deleteCompanyPerformance] = useMutation(
    DELETE_COMPANY_PERFORMANCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CompanyPerformance deleted')
        navigate(routes.companyPerformances())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CompanyPerformance {companyPerformance.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{companyPerformance.id}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{companyPerformance.date}</td>
            </tr>
            <tr>
              <th>Sales</th>
              <td>{companyPerformance.sales}</td>
            </tr>
            <tr>
              <th>Profit</th>
              <td>{companyPerformance.profit}</td>
            </tr>
            <tr>
              <th>Customers</th>
              <td>{companyPerformance.customers}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCompanyPerformance({ id: companyPerformance.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(companyPerformance.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CompanyPerformance
