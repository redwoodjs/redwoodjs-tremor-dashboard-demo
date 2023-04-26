import EditSalesPersonCell from 'src/components/SalesPerson/EditSalesPersonCell'

type SalesPersonPageProps = {
  id: number
}

const EditSalesPersonPage = ({ id }: SalesPersonPageProps) => {
  return <EditSalesPersonCell id={id} />
}

export default EditSalesPersonPage
