import CompanyPerformanceCell from 'src/components/CompanyPerformance/CompanyPerformanceCell'

type CompanyPerformancePageProps = {
  id: number
}

const CompanyPerformancePage = ({ id }: CompanyPerformancePageProps) => {
  return <CompanyPerformanceCell id={id} />
}

export default CompanyPerformancePage
