import { PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { Alert, AlertProps, Button, Form, InputProps, Textarea } from 'react-daisyui'
import { validatePgn, parsePgn } from '../utils/pgn'
import { ParseTree } from '@mliebelt/pgn-parser'
import { EXAMPLE_KIND_30_PGN } from '../utils/examples'
import { PgnViewer } from '../components/PgnViewer'

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
            className="bg-base-200 font-mono"
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            placeholder="Paste PGN here"
            color={props.error ? 'error' : props.success ? 'success' : undefined}
          />
        </div>

        <div className="flex gap-2 justify-center">
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
  const [pgnParseResult, setPgnParseResult] = useState<ParseTree>()

  const isPgnValid = useMemo(() => {
    if (!pgnInputValue) return false

    return validatePgn(pgnInputValue)
  }, [pgnInputValue])

  useEffect(() => {
    const abortCtrl = new AbortController()
    setPgnParseResult(undefined)

    parsePgn(pgnInputValue)
      .then((val) => {
        if (abortCtrl.signal.aborted) return
        setPgnParseResult(val)
      })
      .catch((e) => {
        if (abortCtrl.signal.aborted) return
        setPgnParseResult(undefined)
      })
    return () => abortCtrl.abort()
  }, [pgnInputValue])

  useEffect(() => {
    setValidationAlert(undefined)
  }, [pgnInputValue])

  const validate = async (value: string) => {
    try {
      await parsePgn(value)
      setValidationAlert({
        status: 'success',
        children: (
          <div className="flex flex-col">
            <div className="font-bold">PGN is valid.</div>
          </div>
        ),
      })
    } catch (e: any) {
      setValidationAlert({
        status: 'error',
        children: (
          <div className="flex flex-col">
            <div className="font-bold">PGN is *not* valid.</div>
            <div>{e?.message || 'Unknown parse error.'}</div>
          </div>
        ),
      })
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4 mb-4">
        <h2 className="text-3xl font-bold tracking-tighter">Validate PGN</h2>
        <div className="text-lg text-slate-500 break-all">
          Check validity of PGN format (not compliance of chess rules).
        </div>

        <div className="flex gap-4">
          <Button type="button" size="sm" onClick={() => setPgnInputValue(EXAMPLE_KIND_30_PGN)}>
            Example PGN 1
          </Button>
        </div>

        {validationAlert && (
          <>
            <Alert {...validationAlert} />
          </>
        )}

        <div className="flex flex-col gap-4">
          <PgnForm
            value={pgnInputValue}
            onChange={setPgnInputValue}
            onSubmit={() => validate(pgnInputValue)}
            success={!!pgnInputValue && isPgnValid}
            error={!!pgnInputValue && !isPgnValid}
          />

          {pgnParseResult && (
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold tracking-tighter">PGN viewer</h3>
              <PgnViewer pgn={pgnInputValue} />
            </div>
          )}

          {pgnParseResult && (
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold tracking-tighter">Parse result</h3>
              <div className="bg-base-200 rounded-lg p-4 overflow-x-auto">
                <pre className="bg-base-200">{JSON.stringify(pgnParseResult, null, 2)}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
