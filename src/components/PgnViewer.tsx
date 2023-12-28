import { useEffect, useRef } from 'react'
import LichessPgnViewer from 'lichess-pgn-viewer'
import { Opts } from 'lichess-pgn-viewer/interfaces'

type PgnViewerProps = {
  pgn: string
  options?: Partial<Omit<Opts, 'pgn'>>
}

export function PgnViewer({ pgn, options }: PgnViewerProps) {
  const pgnViewerContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pgnViewerContainerRef.current) return
    const lpv = LichessPgnViewer(pgnViewerContainerRef.current, {
      pgn,
      initialPly: 0,
      lichess: false,
      ...options,
    })
    lpv.goTo('last', false)
  }, [pgn, options])

  return (
    <>
      <div className="lichess-pgn-viewer-container" key={pgn}>
        <div ref={pgnViewerContainerRef}></div>
      </div>
    </>
  )
}
