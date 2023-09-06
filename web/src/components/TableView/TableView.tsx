import { useState } from 'react'

import { InformationCircleIcon } from '@heroicons/react/solid'
import {
  Icon,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  Title,
  Flex,
  Select,
  SelectItem,
  MultiSelect,
  MultiSelectItem,
} from '@tremor/react'

import { deltaTypes } from 'src/data/delta'
import type { SalesPerson } from 'src/data/salesPeople'
interface Props {
  salesPeople: SalesPerson[]
}

const TableView = ({ salesPeople }: Props) => {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedNames, setSelectedNames] = useState<string[]>([])

  const isSalesPersonSelected = (salesPerson: SalesPerson) =>
    (salesPerson.status === selectedStatus || selectedStatus === 'all') &&
    (selectedNames.includes(salesPerson.name) || selectedNames.length === 0)

  return (
    <>
      <div>
        <Flex
          className="space-x-0.5"
          justifyContent="start"
          alignItems="center"
        >
          <Title> Performance History </Title>
          <Icon
            icon={InformationCircleIcon}
            variant="simple"
            tooltip="Shows sales performance per employee"
          />
        </Flex>
      </div>
      <div className="flex space-x-2">
        <MultiSelect
          className="max-w-full sm:max-w-xs"
          onValueChange={setSelectedNames}
          placeholder="Select Salespeople..."
        >
          {salesPeople.map((item) => (
            <MultiSelectItem key={item.name} value={item.name}>
              {item.name}
            </MultiSelectItem>
          ))}
        </MultiSelect>
        <Select
          className="max-w-full sm:max-w-xs"
          defaultValue="all"
          onValueChange={setSelectedStatus}
        >
          <SelectItem value="all">All Performances</SelectItem>
          <SelectItem value="overperforming">Overperforming</SelectItem>
          <SelectItem value="average">Average</SelectItem>
          <SelectItem value="underperforming">Underperforming</SelectItem>
        </Select>
      </div>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className="text-right">Leads</TableHeaderCell>
            <TableHeaderCell className="text-right">Sales ($)</TableHeaderCell>
            <TableHeaderCell className="text-right">Quota ($)</TableHeaderCell>
            <TableHeaderCell className="text-right">Variance</TableHeaderCell>
            <TableHeaderCell className="text-right">Region</TableHeaderCell>
            <TableHeaderCell className="text-right">Status</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {salesPeople
            .filter((item) => isSalesPersonSelected(item))
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.leads}</TableCell>
                <TableCell className="text-right">{item.sales}</TableCell>
                <TableCell className="text-right">{item.quota}</TableCell>
                <TableCell className="text-right">{item.variance}</TableCell>
                <TableCell className="text-right">{item.region}</TableCell>
                <TableCell className="text-right">
                  <BadgeDelta deltaType={deltaTypes[item.status]} size="xs">
                    {item.status}
                  </BadgeDelta>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  )
}

export default TableView
