import { useState } from 'react'

import { Grid, Tab, TabList, Text, Title } from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

import ChartViewsCell from 'src/components/ChartViewsCell/ChartViewsCell'
import KpisCell from 'src/components/KpisCell/KpisCell'
import TableView from 'src/components/TableView/TableView'
import { salesPeople } from 'src/data/salesPeople'

const DynamicDashboardPage = () => {
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
              <KpisCell />
            </Grid>

            <div className="mt-6">
              <ChartViewsCell />
            </div>
          </>
        ) : (
          <TableView salesPeople={salesPeople} />
        )}
      </main>
    </>
  )
}

export default DynamicDashboardPage
