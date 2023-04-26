import { useState } from 'react'

import { Card, Grid, Tab, TabList, Text, Title } from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

import ChartView from 'src/components/ChartView/ChartView'
import type { PerformanceData } from 'src/components/ChartView/ChartView'
import KpiCard from 'src/components/KpiCard/KpiCard'
import type { Kpi } from 'src/components/KpiCard/KpiCard'
import TableView from 'src/components/TableView/TableView'
import type SalesPerson from 'src/components/TableView/TableView'

const kpiData: Kpi[] = [
  {
    title: 'Sales',
    metric: '$ 12,699',
    progress: 15.9,
    target: '$ 80,000',
    delta: '13.2%',
    deltaType: 'moderateIncrease',
  },
  {
    title: 'Profit',
    metric: '$ 45,564',
    progress: 36.5,
    target: '$ 125,000',
    delta: '23.9%',
    deltaType: 'increase',
  },
  {
    title: 'Customers',
    metric: '1,072',
    progress: 53.6,
    target: '2,000',
    delta: '10.1%',
    deltaType: 'moderateDecrease',
  },
]

export const performance: PerformanceData[] = [
  {
    date: '2021-01-01',
    Sales: 900.73,
    Profit: 173,
    Customers: 73,
  },
  {
    date: '2021-01-02',
    Sales: 1000.74,
    Profit: 174.6,
    Customers: 74,
  },
  // ...
  {
    date: '2021-03-13',
    Sales: 882,
    Profit: 682,
    Customers: 682,
  },
]

export const salesPeople: SalesPerson[] = [
  {
    name: 'Peter Doe',
    leads: 45,
    sales: '1,000,000',
    quota: '1,200,000',
    variance: 'low',
    region: 'Region A',
    status: 'overperforming',
    deltaType: 'moderateIncrease',
  },
  {
    name: 'Lena Whitehouse',
    leads: 35,
    sales: '900,000',
    quota: '1,000,000',
    variance: 'low',
    region: 'Region B',
    status: 'average',
    deltaType: 'unchanged',
  },
  {
    name: 'Phil Less',
    leads: 52,
    sales: '930,000',
    quota: '1,000,000',
    variance: 'medium',
    region: 'Region C',
    status: 'underperforming',
    deltaType: 'moderateDecrease',
  },
  {
    name: 'John Camper',
    leads: 22,
    sales: '390,000',
    quota: '250,000',
    variance: 'low',
    region: 'Region A',
    status: 'overperforming',
    deltaType: 'increase',
  },
  {
    name: 'Max Balmoore',
    leads: 49,
    sales: '860,000',
    quota: '750,000',
    variance: 'low',
    region: 'Region B',
    status: 'overperforming',
    deltaType: 'increase',
  },
  {
    name: 'Peter Moore',
    leads: 82,
    sales: '1,460,000',
    quota: '1,500,000',
    variance: 'low',
    region: 'Region A',
    status: 'average',
    deltaType: 'unchanged',
  },
  {
    name: 'Joe Sachs',
    leads: 49,
    sales: '1,230,000',
    quota: '1,800,000',
    variance: 'medium',
    region: 'Region B',
    status: 'underperforming',
    deltaType: 'moderateDecrease',
  },
]

const DashboardPage = () => {
  const [selectedView, setSelectedView] = useState('1')

  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />
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
              {kpiData.map((kpi) => (
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
