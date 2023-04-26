import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/SalesPerson/SalesPeopleCell'
import { truncate } from 'src/lib/formatters'

import type {
  DeleteSalesPersonMutationVariables,
  FindSalesPeople,
} from 'types/graphql'

const DELETE_SALES_PERSON_MUTATION = gql`
  mutation DeleteSalesPersonMutation($id: Int!) {
    deleteSalesPerson(id: $id) {
      id
    }
  }
`

const SalesPeopleList = ({ salesPeople }: FindSalesPeople) => {
  const [deleteSalesPerson] = useMutation(DELETE_SALES_PERSON_MUTATION, {
    onCompleted: () => {
      toast.success('SalesPerson deleted')
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

  const onDeleteClick = (id: DeleteSalesPersonMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete salesPerson ' + id + '?')) {
      deleteSalesPerson({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Leads</th>
            <th>Sales</th>
            <th>Quota</th>
            <th>Variance</th>
            <th>Region</th>
            <th>Status</th>
            <th>Delta type</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {salesPeople.map((salesPerson) => (
            <tr key={salesPerson.id}>
              <td>{truncate(salesPerson.id)}</td>
              <td>{truncate(salesPerson.name)}</td>
              <td>{truncate(salesPerson.leads)}</td>
              <td>{truncate(salesPerson.sales)}</td>
              <td>{truncate(salesPerson.quota)}</td>
              <td>{truncate(salesPerson.variance)}</td>
              <td>{truncate(salesPerson.region)}</td>
              <td>{truncate(salesPerson.status)}</td>
              <td>{truncate(salesPerson.deltaType)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.salesPerson({ id: salesPerson.id })}
                    title={'Show salesPerson ' + salesPerson.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSalesPerson({ id: salesPerson.id })}
                    title={'Edit salesPerson ' + salesPerson.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete salesPerson ' + salesPerson.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(salesPerson.id)}
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

export default SalesPeopleList
