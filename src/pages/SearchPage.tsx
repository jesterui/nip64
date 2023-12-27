import { useMemo, useState } from 'react'
import { Input, Button, Form, InputProps, Table, Badge } from 'react-daisyui'
import { NostrEvent } from '@nostr-dev-kit/ndk'
import { useNDK } from '@nostr-dev-kit/ndk-react'
import { parsePgn } from 'chessops/pgn'
import { EXAMPLE_KIND_1_EVENT_ID, EXAMPLE_KIND_30_EVENT, NIP64_KIND } from '../utils/examples'
import classNames from 'classnames'

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
  const [searchResult, setSearchResult] = useState<NostrEvent>()
  const [isSearching, setIsSearching] = useState(false)

  const pgnString = useMemo(() => {
    try {
      return (JSON.parse(searchResult?.content || JSON.stringify({})).pgn as string) || null
    } catch (e) {
      return null
    }
  }, [searchResult])

  const parsedPgn = useMemo(() => {
    if (!pgnString) return null
    return parsePgn(pgnString)
  }, [pgnString])

  const isPgnValid = useMemo(() => (parsedPgn?.length ?? 0) === 1, [parsedPgn])

  const search = async (value: string) => {
    setSearchResult(undefined)
    if (!value) return

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
    }
  }

  const applyExampleSearch = (eventId: string) => {
    setSearchInputValue(eventId)
    search(eventId)
  }

  const applyExampleEvent = () => {
    setSearchInputValue('')
    setSearchResult(EXAMPLE_KIND_30_EVENT)
  }

  return (
    <div className="screen-search">
      <div className="flex justify-center items-center">
        <div className="w-full grid grid-cols-1 lg:w-8/12">
          <>
            <div className="w-full mt-16 grid grid-cols-1">
              <div className="flex justify-center">
                <h2 className="text-3xl font-bold tracking-tighter">Search</h2>
              </div>

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
                  onClick={() => {
                    //applyExampleSearch(EXAMPLE_KIND_30_EVENT_ID)
                    applyExampleEvent()
                  }}
                >
                  Example (NIP-64)
                </Button>
                <Button type="button" size="sm" onClick={() => applyExampleSearch(EXAMPLE_KIND_1_EVENT_ID)}>
                  Example (non NIP-64)
                </Button>
              </div>

              {searchResult && (
                <div className="flex flex-col gap-4">
                  <Table>
                    <Table.Body>
                      <Table.Row>
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
                                This is *not* a NIP-64 Even
                              </Badge>
                            </>
                          )}
                        </span>
                      </Table.Row>
                      <Table.Row>
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
                                Valid PGN
                              </Badge>
                            </>
                          ) : (
                            <>
                              <Badge variant="outline" color="error">
                                Invalid PGN
                              </Badge>
                            </>
                          )}
                        </span>
                      </Table.Row>

                      <Table.Row>
                        <span>Moves</span>
                        <span
                          className={classNames({
                            'text-success': isPgnValid && parsedPgn![0].moves.children.length,
                            'text-error': parsedPgn === null,
                          })}
                        >
                          {isPgnValid ? parsedPgn![0].moves.children.length : '-'}
                        </span>
                        <span></span>
                      </Table.Row>
                    </Table.Body>
                  </Table>

                  <pre>{pgnString}</pre>

                  <div className="">
                    <pre>{JSON.stringify((({ sig, ...rest }: any) => rest)(searchResult || {}), null, 2)}</pre>
                  </div>
                </div>
              )}

              <div className="pb-2 grow my-4">{!isSearching && !searchResult && <>No results found.</>}</div>
            </div>
          </>
        </div>
      </div>
    </div>
  )
}
