import EditCompanyPerformanceCell from 'src/components/CompanyPerformance/EditCompanyPerformanceCell'

type CompanyPerformancePageProps = {
  id: number
}

const EditCompanyPerformancePage = ({ id }: CompanyPerformancePageProps) => {
  return <EditCompanyPerformanceCell id={id} />
}

export default EditCompanyPerformancePage
