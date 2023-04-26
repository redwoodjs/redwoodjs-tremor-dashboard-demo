import { useState } from 'react'

import {
  BadgeDelta,
  Card,
  // DeltaType,
  Dropdown,
  DropdownItem,
  MultiSelectBox,
  MultiSelectBoxItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react'

export type SalesPerson = {
  name: string
  leads: number
  sales: string
  quota: string
  variance: string
  region: string
  status: string
  deltaType: string
}

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
    <Card>
      <div className="sm:start hidden sm:mt-6 sm:flex sm:space-x-2">
        <MultiSelectBox
          onValueChange={(value) => setSelectedNames(value)}
          placeholder="Select Salespeople"
          className="max-w-xs"
        >
          {salesPeople.map((item) => (
            <MultiSelectBoxItem
              key={item.name}
              value={item.name}
              text={item.name}
            />
          ))}
        </MultiSelectBox>
        <Dropdown
          className="max-w-xs"
          defaultValue="all"
          onValueChange={(value) => setSelectedStatus(value)}
        >
          <DropdownItem value="all" text="All Performances" />
          <DropdownItem value="overperforming" text="Overperforming" />
          <DropdownItem value="average" text="Average" />
          <DropdownItem value="underperforming" text="Underperforming" />
        </Dropdown>
      </div>
      <div className="mt-6 space-y-2 sm:hidden sm:space-y-0">
        <MultiSelectBox
          onValueChange={(value) => setSelectedNames(value)}
          placeholder="Select Salespeople"
          className="max-w-full"
        >
          {salesPeople.map((item) => (
            <MultiSelectBoxItem
              key={item.name}
              value={item.name}
              text={item.name}
            />
          ))}
        </MultiSelectBox>
        <Dropdown
          className="max-w-full"
          defaultValue="all"
          onValueChange={(value) => setSelectedStatus(value)}
        >
          <DropdownItem value="all" text="All Performances" />
          <DropdownItem value="overperforming" text="Overperforming" />
          <DropdownItem value="average" text="Average" />
          <DropdownItem value="underperforming" text="Underperforming" />
        </Dropdown>
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
                  <BadgeDelta deltaType={item.deltaType} size="xs">
                    {item.status}
                  </BadgeDelta>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default TableView
