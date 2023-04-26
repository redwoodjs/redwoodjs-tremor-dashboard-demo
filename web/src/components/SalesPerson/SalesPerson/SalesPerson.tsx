import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteSalesPersonMutationVariables,
  FindSalesPersonById,
} from 'types/graphql'

const DELETE_SALES_PERSON_MUTATION = gql`
  mutation DeleteSalesPersonMutation($id: Int!) {
    deleteSalesPerson(id: $id) {
      id
    }
  }
`

interface Props {
  salesPerson: NonNullable<FindSalesPersonById['salesPerson']>
}

const SalesPerson = ({ salesPerson }: Props) => {
  const [deleteSalesPerson] = useMutation(DELETE_SALES_PERSON_MUTATION, {
    onCompleted: () => {
      toast.success('SalesPerson deleted')
      navigate(routes.salesPeople())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteSalesPersonMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete salesPerson ' + id + '?')) {
      deleteSalesPerson({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            SalesPerson {salesPerson.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{salesPerson.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{salesPerson.name}</td>
            </tr>
            <tr>
              <th>Leads</th>
              <td>{salesPerson.leads}</td>
            </tr>
            <tr>
              <th>Sales</th>
              <td>{salesPerson.sales}</td>
            </tr>
            <tr>
              <th>Quota</th>
              <td>{salesPerson.quota}</td>
            </tr>
            <tr>
              <th>Variance</th>
              <td>{salesPerson.variance}</td>
            </tr>
            <tr>
              <th>Region</th>
              <td>{salesPerson.region}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{salesPerson.status}</td>
            </tr>
            <tr>
              <th>Delta type</th>
              <td>{salesPerson.deltaType}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSalesPerson({ id: salesPerson.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(salesPerson.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default SalesPerson
