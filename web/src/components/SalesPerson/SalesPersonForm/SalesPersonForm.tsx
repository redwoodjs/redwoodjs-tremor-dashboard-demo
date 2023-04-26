import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditSalesPersonById, UpdateSalesPersonInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormSalesPerson = NonNullable<EditSalesPersonById['salesPerson']>

interface SalesPersonFormProps {
  salesPerson?: EditSalesPersonById['salesPerson']
  onSave: (data: UpdateSalesPersonInput, id?: FormSalesPerson['id']) => void
  error: RWGqlError
  loading: boolean
}

const SalesPersonForm = (props: SalesPersonFormProps) => {
  const onSubmit = (data: FormSalesPerson) => {
    props.onSave(data, props?.salesPerson?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormSalesPerson> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.salesPerson?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="leads"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Leads
        </Label>

        <NumberField
          name="leads"
          defaultValue={props.salesPerson?.leads}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="leads" className="rw-field-error" />

        <Label
          name="sales"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sales
        </Label>

        <TextField
          name="sales"
          defaultValue={props.salesPerson?.sales}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="sales" className="rw-field-error" />

        <Label
          name="quota"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quota
        </Label>

        <TextField
          name="quota"
          defaultValue={props.salesPerson?.quota}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="quota" className="rw-field-error" />

        <Label
          name="variance"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Variance
        </Label>

        <TextField
          name="variance"
          defaultValue={props.salesPerson?.variance}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="variance" className="rw-field-error" />

        <Label
          name="region"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Region
        </Label>

        <TextField
          name="region"
          defaultValue={props.salesPerson?.region}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="region" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>

        <TextField
          name="status"
          defaultValue={props.salesPerson?.status}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="status" className="rw-field-error" />

        <Label
          name="deltaType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Delta type
        </Label>

        <TextField
          name="deltaType"
          defaultValue={props.salesPerson?.deltaType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="deltaType" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SalesPersonForm
