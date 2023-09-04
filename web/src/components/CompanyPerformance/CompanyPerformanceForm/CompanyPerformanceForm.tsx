import type {
  EditCompanyPerformanceById,
  UpdateCompanyPerformanceInput,
} from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  DatetimeLocalField,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormCompanyPerformance = NonNullable<
  EditCompanyPerformanceById['companyPerformance']
>

interface CompanyPerformanceFormProps {
  companyPerformance?: EditCompanyPerformanceById['companyPerformance']
  onSave: (
    data: UpdateCompanyPerformanceInput,
    id?: FormCompanyPerformance['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const CompanyPerformanceForm = (props: CompanyPerformanceFormProps) => {
  const onSubmit = (data: FormCompanyPerformance) => {
    props.onSave(data, props?.companyPerformance?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCompanyPerformance> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date
        </Label>

        <DatetimeLocalField
          name="date"
          defaultValue={formatDatetime(props.companyPerformance?.date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="date" className="rw-field-error" />

        <Label
          name="Sales"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sales
        </Label>

        <TextField
          name="Sales"
          defaultValue={props.companyPerformance?.Sales}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="Sales" className="rw-field-error" />

        <Label
          name="Profit"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profit
        </Label>

        <TextField
          name="Profit"
          defaultValue={props.companyPerformance?.Profit}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="Profit" className="rw-field-error" />

        <Label
          name="Customers"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Customers
        </Label>

        <NumberField
          name="Customers"
          defaultValue={props.companyPerformance?.Customers}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="Customers" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CompanyPerformanceForm
