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

import ChartViewsCell from 'src/components/ChartViewsCell'
import KpisCell from 'src/components/KpisCell'
import TableViewsCell from 'src/components/TableViewsCell'

const DynamicDashboardPage = () => {
  return (
    <>
      <MetaTags
        title="Dynamic Dashboard"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
      />
      <main className="p-12">
        <Title>Dynamic Dashboard</Title>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
        <TabGroup className="mt-6">
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Detail</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={3} className="mt-6 gap-6">
                <KpisCell />
              </Grid>
              <div className="mt-6">
                <ChartViewsCell />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <TableViewsCell />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>{' '}
      </main>
    </>
  )
}

export default DynamicDashboardPage
