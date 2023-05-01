import { DeltaType } from '@tremor/react'

import { FieldError, Label, RadioField } from '@redwoodjs/forms'

import type { KpiFormProps } from 'src/components/Kpi/KpiForm/KpiForm'

export const DeltaTypes: { [key: string]: DeltaType } = {
  Increase: 'increase',
  ModerateIncrease: 'moderateIncrease',
  Decrease: 'decrease',
  ModerateDecrease: 'moderateDecrease',
  Unchanged: 'unchanged',
}

const DeltaTypesInput = (props: KpiFormProps) => {
  return (
    <>
      <Label
        name="deltaType"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Delta type
      </Label>
      <div className="rw-check-radio-items">
        {Object.entries(DeltaTypes).map(([key, value]) => {
          return (
            <>
              <RadioField
                key={key}
                name="deltaType"
                defaultValue={value}
                defaultChecked={props.kpi?.deltaType?.includes(value)}
                className="rw-input"
                errorClassName="rw-input rw-input-error"
                validation={{ required: true }}
              />
              <div className="mr-6">{key}</div>
            </>
          )
        })}
      </div>

      <FieldError name="deltaType" className="rw-field-error" />
    </>
  )
}

export default DeltaTypesInput
