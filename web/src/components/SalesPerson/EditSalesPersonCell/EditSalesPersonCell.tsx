import type { EditSalesPersonById, UpdateSalesPersonInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SalesPersonForm from 'src/components/SalesPerson/SalesPersonForm'

export const QUERY = gql`
  query EditSalesPersonById($id: Int!) {
    salesPerson: salesPerson(id: $id) {
      id
      name
      leads
      sales
      quota
      variance
      region
      status
      deltaType
    }
  }
`
const UPDATE_SALES_PERSON_MUTATION = gql`
  mutation UpdateSalesPersonMutation(
    $id: Int!
    $input: UpdateSalesPersonInput!
  ) {
    updateSalesPerson(id: $id, input: $input) {
      id
      name
      leads
      sales
      quota
      variance
      region
      status
      deltaType
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  salesPerson,
}: CellSuccessProps<EditSalesPersonById>) => {
  const [updateSalesPerson, { loading, error }] = useMutation(
    UPDATE_SALES_PERSON_MUTATION,
    {
      onCompleted: () => {
        toast.success('SalesPerson updated')
        navigate(routes.salesPeople())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateSalesPersonInput,
    id: EditSalesPersonById['salesPerson']['id']
  ) => {
    updateSalesPerson({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit SalesPerson {salesPerson?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SalesPersonForm
          salesPerson={salesPerson}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
