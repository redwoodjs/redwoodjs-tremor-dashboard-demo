import SalesPersonCell from 'src/components/SalesPerson/SalesPersonCell'

type SalesPersonPageProps = {
  id: number
}

const SalesPersonPage = ({ id }: SalesPersonPageProps) => {
  return <SalesPersonCell id={id} />
}

export default SalesPersonPage
