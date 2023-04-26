import KpiCell from 'src/components/Kpi/KpiCell'

type KpiPageProps = {
  id: number
}

const KpiPage = ({ id }: KpiPageProps) => {
  return <KpiCell id={id} />
}

export default KpiPage
