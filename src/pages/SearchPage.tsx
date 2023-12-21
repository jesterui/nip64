import { useMemo, useState } from 'react'
import { Input, Button, Form, InputProps } from 'react-daisyui'
import { useNDK } from '@nostr-dev-kit/ndk-react'
import { NDKFilter, NostrEvent } from '@nostr-dev-kit/ndk'

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

const EXAMPLE_KIND_1_EVENT_ID = 'a5f35583eabee582f4ca17a9b67cfbbeb4e254c9f0c7e075bd62b03e6db5a7ff'

// const EXAMPLE_KIND_30_EVENT_ID = '' // TODO
const EXAMPLE_KIND_30_EVENT: NostrEvent = {
  created_at: 1,
  content: JSON.stringify({
    pgn: `[Event "F/S Return Match"]
[Site "Belgrade, Serbia JUG"]
[Date "1992.11.04"]
[Round "29"]
[White "Fischer, Robert J."]
[Black "Spassky, Boris V."]
[Result "1/2-1/2"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 {This opening is called the Ruy Lopez.} 3... a6
4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7
11. c4 c6 12. cxb5 axb5 13. Nc3 Bb7 14. Bg5 b4 15. Nb1 h6 16. Bh4 c5 17. dxe5
Nxe4 18. Bxe7 Qxe7 19. exd6 Qf6 20. Nbd2 Nxd6 21. Nc4 Nxc4 22. Bxc4 Nb6
23. Ne5 Rae8 24. Bxf7+ Rxf7 25. Nxf7 Rxe1+ 26. Qxe1 Kxf7 27. Qe3 Qg5 28. Qxg5
hxg5 29. b3 Ke6 30. a3 Kd6 31. axb4 cxb4 32. Ra5 Nd5 33. f3 Bc8 34. Kf2 Bf5
35. Ra7 g6 36. Ra6+ Kc5 37. Ke1 Nf4 38. g3 Nxh3 39. Kd2 Kb5 40. Rd6 Kc5 41. Ra6
Nf2 42. g4 Bd3 43. Re6 1/2-1/2`,
  }),
  tags: [],
  kind: 30,
  pubkey: '',
  id: '',
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
