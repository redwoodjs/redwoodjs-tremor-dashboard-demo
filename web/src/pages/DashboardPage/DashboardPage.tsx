import { useState } from 'react'

import { Grid, Tab, TabList, Text, Title } from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

import ChartView from 'src/components/ChartView/ChartView'
import KpiCard from 'src/components/KpiCard/KpiCard'
import TableView from 'src/components/TableView/TableView'
import { kpis } from 'src/data/kpis'
import { performance } from 'src/data/performance'
import { salesPeople } from 'src/data/salesPeople'

const DashboardPage = () => {
  const [selectedView, setSelectedView] = useState('1')

  return (
    <>
      <MetaTags
        title="Dashboard"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
      />
      <main className="bg-slate-50 p-6 sm:p-10">
        <Title>Dashboard</Title>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

        <TabList
          defaultValue="1"
          onValueChange={(value) => setSelectedView(value)}
          className="mt-6"
        >
          <Tab value="1" text="Overview" />
          <Tab value="2" text="Detail" />
        </TabList>

        {selectedView === '1' ? (
          <>
            <Grid numColsLg={3} className="mt-6 gap-6">
              {kpis.map((kpi) => (
                // eslint-disable-next-line react/jsx-key
                <KpiCard key={kpi.title} kpi={kpi} />
              ))}
            </Grid>

            <div className="mt-6">
              <ChartView performance={performance} />
            </div>
          </>
        ) : (
          <TableView salesPeople={salesPeople} />
        )}
      </main>
    </>
  )
}

export default DashboardPage
