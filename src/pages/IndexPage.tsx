import { Textarea } from 'react-daisyui'
import { BASIC_NIP64_EVENT, EXAMPLE_NIP64_EVENT0 } from '../utils/examples'
import { PgnViewer } from '../components/PgnViewer'

const EXAMPLE_EVENT = EXAMPLE_NIP64_EVENT0

const BASIC_EXAMPLE_JSON = JSON.stringify(BASIC_NIP64_EVENT, null, 2)
const BASIC_EXAMPLE_JSON_ROWS = BASIC_EXAMPLE_JSON.split(`\n`).length + 1

export function IndexPage() {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tighter mb-2">NIP-64</h2>

      <div className="flex flex-col gap-4 mb-4">
        <h3 className="text-2xl font-bold tracking-tighter">Basic event</h3>
        <div className="overflow-auto">
          <Textarea
            className="w-full bg-base-200 font-mono"
            rows={BASIC_EXAMPLE_JSON_ROWS}
            value={BASIC_EXAMPLE_JSON}
            readOnly
          ></Textarea>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-4">
        <h3 className="text-2xl font-bold tracking-tighter">Example</h3>
        <div className="flex flex-col xl:flex-row gap-4 mb-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-bold tracking-tighter">PGN viewer</h4>
            <PgnViewer pgn={EXAMPLE_EVENT.content} />
          </div>
          <div className="flex flex-col grow gap-2 overflow-auto">
            <h4 className="text-xl font-bold tracking-tighter">
              <code className="font-mono">`content`</code>
            </h4>

            <Textarea className="w-full h-full bg-base-200 font-mono" value={EXAMPLE_EVENT.content} readOnly></Textarea>
          </div>
        </div>
      </div>
    </>
  )
}
