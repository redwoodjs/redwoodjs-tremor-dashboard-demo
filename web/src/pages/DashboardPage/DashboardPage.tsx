import {
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

import ChartView from 'src/components/ChartView/ChartView'
import KpiCard from 'src/components/KpiCard/KpiCard'
import TableView from 'src/components/TableView/TableView'
import { kpis, kpiList } from 'src/data/kpis'
import { performance } from 'src/data/performance'
import { salesPeople } from 'src/data/salesPeople'

const DashboardPage = () => {
  // const [selectedView, setSelectedView] = useState('1')

  return (
    <>
      <MetaTags
        title="Dashboard"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
      />
      <main className="p-12">
        <Title>Dashboard</Title>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

        <TabGroup className="mt-6">
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Detail</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={3} className="mt-6 gap-6">
                {kpis.map((kpi) => (
                  <KpiCard kpi={kpi} key={kpi.title} />
                ))}
              </Grid>
              <div className="mt-6">
                <ChartView performance={performance} kpiList={kpiList} />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <TableView salesPeople={salesPeople} />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>
    </>
  )
}

export default DashboardPage
