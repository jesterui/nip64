import { PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { Alert, AlertProps, Button, Form, InputProps, Textarea } from 'react-daisyui'
import { validatePgn } from '../utils/pgn'

type PgnFormProps = {
  value: string
  onChange: (val: string) => void
  onSubmit: (val: string) => void
  error?: boolean
  success?: boolean
} & Omit<InputProps, 'value' | 'onChange'>

const PgnForm = (props: PgnFormProps) => {
  return (
    <Form
      noValidate
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()

        props.onSubmit(props.value)
      }}
    >
      <div className="flex flex-col gap-2">
        <div className="form-control">
          <Textarea
            size="lg"
            rows={10}
            className="font-mono"
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            placeholder="Paste PGN here"
            color={props.error ? 'error' : props.success ? 'success' : undefined}
          />
        </div>

        <div className="flex justify-center">
          <Button type="submit" size="lg">
            Validate
          </Button>
        </div>
      </div>
    </Form>
  )
}

export default function ValidatePage() {
  const [pgnInputValue, setPgnInputValue] = useState('')
  const [validationAlert, setValidationAlert] = useState<PropsWithChildren<AlertProps>>()

  const isPgnValid = useMemo(() => {
    if (!pgnInputValue) return false

    return validatePgn(pgnInputValue)
  }, [pgnInputValue])

  useEffect(() => {
    setValidationAlert(undefined)
  }, [pgnInputValue])

  const validate = async (value: string) => {
    if (validatePgn(value)) {
      setValidationAlert({
        status: 'success',
        children: <>PGN is valid</>,
      })
    } else {
      setValidationAlert({
        status: 'error',
        children: <>PGN is *not* valid</>,
      })
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4 mb-4">
        <h2 className="text-3xl font-bold tracking-tighter">Validate PGN</h2>

        <div className="flex flex-col gap-4 mb-4">
          <PgnForm
            value={pgnInputValue}
            onChange={setPgnInputValue}
            onSubmit={() => validate(pgnInputValue)}
            success={!!pgnInputValue && isPgnValid}
            error={!!pgnInputValue && !isPgnValid}
          />

          {validationAlert && (
            <>
              <Alert {...validationAlert} />
            </>
          )}
        </div>
      </div>
    </>
  )
}
