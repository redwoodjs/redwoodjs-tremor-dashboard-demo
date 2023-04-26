import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SalesPersonForm from 'src/components/SalesPerson/SalesPersonForm'

import type { CreateSalesPersonInput } from 'types/graphql'

const CREATE_SALES_PERSON_MUTATION = gql`
  mutation CreateSalesPersonMutation($input: CreateSalesPersonInput!) {
    createSalesPerson(input: $input) {
      id
    }
  }
`

const NewSalesPerson = () => {
  const [createSalesPerson, { loading, error }] = useMutation(
    CREATE_SALES_PERSON_MUTATION,
    {
      onCompleted: () => {
        toast.success('SalesPerson created')
        navigate(routes.salesPeople())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateSalesPersonInput) => {
    createSalesPerson({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New SalesPerson</h2>
      </header>
      <div className="rw-segment-main">
        <SalesPersonForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSalesPerson
