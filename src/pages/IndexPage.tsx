import LichessPgnViewer from 'lichess-pgn-viewer'
import { useEffect, useRef } from 'react'
import { BASIC_KIND_30_EVENT, EXAMPLE_KIND_30_EVENT } from '../utils/examples'
import { Textarea } from 'react-daisyui'

const EXAMPLE_EVENT = EXAMPLE_KIND_30_EVENT
const EXAMPLE_CONTENT = JSON.parse(EXAMPLE_EVENT.content)

const BASIC_EXAMPLE_JSON = JSON.stringify(BASIC_KIND_30_EVENT, null, 2)
const BASIC_EXAMPLE_JSON_ROWS = BASIC_EXAMPLE_JSON.split(`\n`).length + 1

export function IndexPage() {
  const pgnViewerContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pgnViewerContainerRef.current) return
    const lpv = LichessPgnViewer(pgnViewerContainerRef.current, {
      pgn: EXAMPLE_CONTENT.pgn,
      initialPly: 0,
      lichess: false,
    })
    lpv.goTo('last', false)
  }, [pgnViewerContainerRef])

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tighter mb-2">NIP-64</h2>

      <div className="flex flex-col gap-4 mb-4">
        <h3 className="text-2xl font-bold tracking-tighter">Basic event</h3>
        <div className="overflow-scroll">
          <Textarea
            className="w-full font-mono"
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
            <div className="lichess-pgn-viewser-container">
              <div ref={pgnViewerContainerRef}></div>
            </div>
          </div>
          <div className="flex flex-col grow gap-2 overflow-scroll">
            <h4 className="text-xl font-bold tracking-tighter">
              <code className="font-mono">`content.pgn`</code>
            </h4>

            <Textarea className="w-full h-full font-mono" value={EXAMPLE_CONTENT.pgn} readOnly></Textarea>
          </div>
        </div>
      </div>
    </>
  )
}
