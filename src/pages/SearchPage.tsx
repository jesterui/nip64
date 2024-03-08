import { useEffect, useMemo, useState } from 'react'
import { Input, Button, Form, InputProps, Table, Badge, Loading, Alert } from 'react-daisyui'
import { NostrEvent } from '@nostr-dev-kit/ndk'
import { useNDK } from '@nostr-dev-kit/ndk-react'
import { ParseTree } from '@mliebelt/pgn-parser'
import classNames from 'classnames'

import { EXAMPLE_KIND_1_EVENT_ID, EXAMPLE_KIND_64_EVENT_ID, NIP64_KIND } from '../utils/examples'
import { validatePgn, parsePgn } from '../utils/pgn'
import { PgnViewer } from '../components/PgnViewer'

type SearchFromProps = {
  value: string
  onChange: (val: string) => void
  onSubmit: (val: string) => void
  error?: boolean
  success?: boolean
} & Omit<InputProps, 'value' | 'onChange'>

const SearchFrom = (props: SearchFromProps) => {
  return (
    <Form
      noValidate
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()

        props.onSubmit(props.value)
      }}
    >
      <div className="flex pb-2">
        <div className="grow form-control">
          <Input
            type="text"
            size="lg"
            className="bg-base-200"
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            placeholder="NIP-64 event id"
            color={props.error ? 'error' : undefined}
          />
        </div>

        <div className="flex-none ml-1">
          <Button type="submit" size="lg">
            Search
          </Button>
        </div>
      </div>
    </Form>
  )
}

export default function SearchPage() {
  const { ndk } = useNDK()

  const [searchInputValue, setSearchInputValue] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [searchedForCurrentInputValue, setSearchedForCurrentInputValue] = useState(false)
  const [searchResult, setSearchResult] = useState<NostrEvent>()

  const pgnString = useMemo(() => {
    return searchResult?.kind === NIP64_KIND ? searchResult?.content : undefined
  }, [searchResult])

  const [pgnParseResult, setPgnParseResult] = useState<ParseTree[]>()
  const [pgnParseError, setPgnParseError] = useState<any>()

  const isPgnValid = useMemo(() => !!pgnString && validatePgn(pgnString), [pgnString])

  useEffect(() => {
    setSearchedForCurrentInputValue(false)
  }, [searchInputValue])

  useEffect(() => {
    setPgnParseResult(undefined)
    setPgnParseError(undefined)

    if (!pgnString) return

    const abortCtrl = new AbortController()
    parsePgn(pgnString)
      .then((val) => {
        if (abortCtrl.signal.aborted) return
        setPgnParseResult(val)
        setPgnParseError(undefined)
      })
      .catch((e) => {
        if (abortCtrl.signal.aborted) return
        setPgnParseResult(undefined)
        setPgnParseError(e)
      })

    return () => abortCtrl.abort()
  }, [pgnString])

  const moveNumber = useMemo(() => {
    if (!pgnParseResult || pgnParseResult.length > 0) return 0
    if (pgnParseResult[0].moves.length === 0) return 0
    const move = pgnParseResult[0].moves.reduce((a, b) => (a.moveNumber > b.moveNumber ? a : b))
    return move.moveNumber || 0
  }, [pgnParseResult])

  const search = async (value: string) => {
    setIsSearching(false)
    setSearchResult(undefined)

    if (!value) {
      setSearchedForCurrentInputValue(true)
    } else {
      setIsSearching(true)
      try {
        const event = await ndk?.fetchEvent(value, {
          subId: 's',
          closeOnEose: true,
        })
        setSearchResult(event?.rawEvent() ?? undefined)
        setIsSearching(false)
      } catch (e) {
        setIsSearching(false)
      } finally {
        setSearchedForCurrentInputValue(true)
      }
    }
  }

  const applyExampleSearch = (eventId: string) => {
    setSearchInputValue(eventId)
    search(eventId)
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full grid grid-cols-1 lg:w-8/12">
          <>
            <div className="w-full mt-16 grid grid-cols-1 gap-2">
              <div className="flex justify-center">
                <h2 className="text-3xl font-bold tracking-tighter">Search</h2>
              </div>

              <div>
                <div className="my-1">
                  <small>Search for NIP-64 events.</small>
                </div>

                <SearchFrom
                  value={searchInputValue}
                  onChange={setSearchInputValue}
                  onSubmit={() => search(searchInputValue)}
                />

                <div className="flex gap-1">
                  <Button
                    type="button"
                    size="sm"
                    color="primary"
                    onClick={() => applyExampleSearch(EXAMPLE_KIND_64_EVENT_ID)}
                  >
                    Example (NIP-64)
                  </Button>
                  <Button type="button" size="sm" onClick={() => applyExampleSearch(EXAMPLE_KIND_1_EVENT_ID)}>
                    Example (non NIP-64)
                  </Button>
                </div>
              </div>

              <div className="my-4">
                {isSearching && (
                  <Alert>
                    <Loading />
                  </Alert>
                )}
                {searchedForCurrentInputValue && !isSearching && !searchResult && (
                  <>
                    <Alert>No results found.</Alert>
                  </>
                )}
              </div>

              {searchResult && (
                <div className="flex flex-col gap-4">
                  <Table className="bg-base-200 rounded-lg" size="lg" zebra>
                    <Table.Body>
                      <Table.Row hover>
                        <span>Kind</span>
                        <span
                          className={classNames({
                            'text-success': searchResult.kind === NIP64_KIND,
                            'text-error': searchResult.kind !== NIP64_KIND,
                          })}
                        >
                          {searchResult.kind}
                        </span>
                        <span>
                          {searchResult.kind === NIP64_KIND ? (
                            <>
                              <Badge variant="outline" color="success">
                                This is a NIP-64 Event
                              </Badge>
                            </>
                          ) : (
                            <>
                              <Badge variant="outline" color="error">
                                This is&nbsp;<strong>not</strong>&nbsp;a NIP-64 Event
                              </Badge>
                            </>
                          )}
                        </span>
                      </Table.Row>
                      <Table.Row hover>
                        <span>PGN</span>
                        <span
                          className={classNames({
                            'text-success': isPgnValid,
                            'text-error': !isPgnValid,
                          })}
                        >
                          {isPgnValid ? 'true' : 'false'}
                        </span>
                        <span>
                          {isPgnValid ? (
                            <>
                              <Badge variant="outline" color="success">
                                Valid
                              </Badge>
                            </>
                          ) : (
                            <>
                              <Badge variant="outline" color="error">
                                Invalid
                              </Badge>
                            </>
                          )}
                        </span>
                      </Table.Row>

                      <Table.Row hover>
                        <span>Move #</span>
                        <span
                          className={classNames({
                            'text-success': isPgnValid,
                            'text-error': !isPgnValid,
                          })}
                        >
                          {isPgnValid && moveNumber > 0 ? moveNumber : '-'}
                        </span>
                        <span></span>
                      </Table.Row>
                    </Table.Body>
                  </Table>

                  {pgnParseResult && pgnString && (
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-bold tracking-tighter">PGN viewer</h3>
                      <PgnViewer pgn={pgnString} />
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold tracking-tighter">PGN</h3>
                    {pgnParseError && <Alert status="error">{pgnParseError?.message || 'Unknown error.'}</Alert>}
                    <div className="bg-base-200 rounded-lg p-4 overflow-x-auto">
                      {pgnString ? (
                        <>
                          <pre>{pgnString}</pre>
                        </>
                      ) : (
                        <div>Not present.</div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold tracking-tighter">Event</h3>
                    <div className="bg-base-200 rounded-lg p-4 overflow-x-auto">
                      <pre className="bg-base-200">
                        {JSON.stringify((({ sig, ...rest }: any) => rest)(searchResult || {}), null, 2)}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        </div>
      </div>
    </>
  )
}
