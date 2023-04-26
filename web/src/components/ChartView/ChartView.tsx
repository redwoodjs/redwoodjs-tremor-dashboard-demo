import { useState } from 'react'

import { InformationCircleIcon } from '@heroicons/react/outline'
import {
  AreaChart,
  Card,
  Flex,
  Icon,
  Text,
  Title,
  Toggle,
  ToggleItem,
} from '@tremor/react'

export type PerformanceData = {
  date: string
  sales: number
  profit: number
  customers: number
}

interface Props {
  performance: PerformanceData[]
}

// Basic formatters for the chart values
const dollarFormatter = (value: number) =>
  `$ ${Intl.NumberFormat('us').format(value).toString()}`

const numberFormatter = (value: number) =>
  `${Intl.NumberFormat('us').format(value).toString()}`

const ChartView = ({ performance }: Props) => {
  const [selectedKpi, setSelectedKpi] = useState('sales')
  // d = performance
  // map formatters by selectedKpi
  const formatters: { [key: string]: any } = {
    Sales: dollarFormatter,
    Profit: dollarFormatter,
    Customers: numberFormatter,
  }

  return (
    <Card>
      <div className="justify-between md:flex">
        <div>
          <Flex
            justifyContent="start"
            className="space-x-0.5"
            alignItems="center"
          >
            <Title> Performance History </Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Shows day-over-day (%) changes of past performance"
            />
          </Flex>
          <Text> Daily increase or decrease per domain </Text>
        </div>
        <div className="mt-6 md:mt-0">
          <Toggle
            color="zinc"
            defaultValue={selectedKpi}
            onValueChange={(value) => setSelectedKpi(value)}
          >
            <ToggleItem value="sales" text="Sales" />
            <ToggleItem value="profit" text="Profit" />
            <ToggleItem value="customers" text="Customers" />
          </Toggle>
        </div>
      </div>
      <AreaChart
        data={performance}
        index="date"
        categories={[selectedKpi]}
        colors={['blue']}
        showLegend={false}
        valueFormatter={formatters[selectedKpi]}
        yAxisWidth={56}
        className="mt-8 h-96"
      />
    </Card>
  )
}

export default ChartView
