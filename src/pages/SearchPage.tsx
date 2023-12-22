import { useMemo, useState } from 'react'
import { Input, Button, Form, InputProps } from 'react-daisyui'
import { NDKFilter, NostrEvent } from '@nostr-dev-kit/ndk'
import { useNDK } from '@nostr-dev-kit/ndk-react'
import { EXAMPLE_KIND_1_EVENT_ID, EXAMPLE_KIND_30_EVENT } from '../utils/examples'

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

  const pgn = useMemo(() => {
    try {
      return (JSON.parse(searchResult?.content || JSON.stringify({})).pgn as string) || null
    } catch (e) {
      return null
    }
  }, [searchResult])

  const search = async (value: string) => {
    setSearchResult(undefined)

    if (!value) {
      return
    }

    const filter: NDKFilter = {
      ids: [value],
      limit: 1,
    }

    setIsSearching(true)
    try {
      const event = await ndk?.fetchEvent(filter, {
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

              <pre>{pgn}</pre>

              <div className="pb-2 grow my-4">
                <pre>{JSON.stringify((({ sig, ...rest }: any) => rest)(searchResult || {}), null, 2)}</pre>
              </div>

              <div className="pb-2 grow my-4">{!isSearching && !searchResult && <>No results found.</>}</div>
            </div>
          </>
        </div>
      </div>
    </div>
  )
}
