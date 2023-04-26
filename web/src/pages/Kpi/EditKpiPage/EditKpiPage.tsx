import EditKpiCell from 'src/components/Kpi/EditKpiCell'

type KpiPageProps = {
  id: number
}

const EditKpiPage = ({ id }: KpiPageProps) => {
  return <EditKpiCell id={id} />
}

export default EditKpiPage
