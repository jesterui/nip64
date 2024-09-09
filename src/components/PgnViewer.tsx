import { useEffect, useRef, useState } from 'react'
import LichessPgnViewer from 'lichess-pgn-viewer'
import { Opts } from 'lichess-pgn-viewer/interfaces'
import { Alert } from 'react-daisyui'
import { XCircleIcon } from '@heroicons/react/24/outline'

type PgnViewerProps = {
  pgn: string
  options?: Partial<Omit<Opts, 'pgn'>>
}

export function PgnViewer({ pgn, options }: PgnViewerProps) {
  const pgnViewerContainerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    if (!pgnViewerContainerRef.current) return

    setError(undefined)
    try {
      const lpv = LichessPgnViewer(pgnViewerContainerRef.current, {
        pgn,
        initialPly: 0,
        lichess: false,
        ...options,
      })
      lpv.goTo('last', false)
    } catch (e: unknown) {
      setError(e)
    }
  }, [pgn, options])

  return (
    <>
      <div className="lichess-pgn-viewer-container" key={pgn}>
        <div ref={pgnViewerContainerRef}></div>
      </div>

      {error && (
        <Alert status="error" icon={<XCircleIcon className="w-8 h-8" />}>
          <div className="text-xl font-bold mb-2">There has been an error displaying the contents as chessboard.</div>
        </Alert>
      )}
    </>
  )
}
