import type { EditKpiById, UpdateKpiInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

import DeltaTypesInput from 'src/components/DeltaTypesInput/DeltaTypesInput'

type FormKpi = NonNullable<EditKpiById['kpi']>

export interface KpiFormProps {
  kpi?: EditKpiById['kpi']
  onSave: (data: UpdateKpiInput, id?: FormKpi['id']) => void
  error: RWGqlError
  loading: boolean
}

const KpiForm = (props: KpiFormProps) => {
  const onSubmit = (data: FormKpi) => {
    props.onSave(data, props?.kpi?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormKpi> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.kpi?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="metric"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Metric
        </Label>

        <TextField
          name="metric"
          defaultValue={props.kpi?.metric}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="metric" className="rw-field-error" />

        <Label
          name="metricTarget"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Metric target
        </Label>

        <TextField
          name="metricTarget"
          defaultValue={props.kpi?.metricTarget}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="metricTarget" className="rw-field-error" />

        <Label
          name="delta"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Delta
        </Label>

        <TextField
          name="delta"
          defaultValue={props.kpi?.delta}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="delta" className="rw-field-error" />

        <DeltaTypesInput {...props} />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default KpiForm
