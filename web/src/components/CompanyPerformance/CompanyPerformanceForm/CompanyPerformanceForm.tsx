import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditCompanyPerformanceById,
  UpdateCompanyPerformanceInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

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

        <TextField
          name="date"
          defaultValue={props.companyPerformance?.date}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="date" className="rw-field-error" />

        <Label
          name="sales"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sales
        </Label>

        <TextField
          name="sales"
          defaultValue={props.companyPerformance?.sales}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="sales" className="rw-field-error" />

        <Label
          name="profit"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profit
        </Label>

        <TextField
          name="profit"
          defaultValue={props.companyPerformance?.profit}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="profit" className="rw-field-error" />

        <Label
          name="customers"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Customers
        </Label>

        <NumberField
          name="customers"
          defaultValue={props.companyPerformance?.customers}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="customers" className="rw-field-error" />

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
