import { useRef } from 'react'
import { Alert, Button, Modal, Stats } from 'react-daisyui'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useNDK } from '@nostr-dev-kit/ndk-react'
import { NDKRelayStatus } from '@nostr-dev-kit/ndk'
import classNames from 'classnames'

export function NdkStats() {
  const { ndk } = useNDK()
  const modalRef = useRef<HTMLDialogElement>(null)

  const stats = ndk?.pool.stats()
  const relays = Array.from(ndk?.pool.relays.entries() || [])

  return (
    <>
      <Stats className="bg-base-200 shadow">
        <Stats.Stat className="cursor-pointer" onClick={() => modalRef.current?.showModal()}>
          <Stats.Stat.Title>Total</Stats.Stat.Title>
          <Stats.Stat.Value>{stats?.total ?? '?'}</Stats.Stat.Value>
          <Stats.Stat.Desc>Total relays</Stats.Stat.Desc>
        </Stats.Stat>
        <Stats.Stat>
          <Stats.Stat.Title>Connected</Stats.Stat.Title>
          <Stats.Stat.Value>{stats?.connected ?? '?'}</Stats.Stat.Value>
          <Stats.Stat.Desc>Conntected relays</Stats.Stat.Desc>
        </Stats.Stat>
        <Stats.Stat>
          <Stats.Stat.Title>Disconnected</Stats.Stat.Title>
          <Stats.Stat.Value>{stats?.disconnected ?? '?'}</Stats.Stat.Value>
          <Stats.Stat.Desc>Disconntected relays</Stats.Stat.Desc>
        </Stats.Stat>
      </Stats>
      <Modal ref={modalRef} backdrop className="w-11/12 max-w-5xl" id="ndk-stats-total-relays-modal">
        <form method="dialog">
          <Button size="sm" color="ghost" shape="circle" className="absolute right-2 top-2">
            <XMarkIcon className="w-6 h-6" title="Close" />
          </Button>
        </form>
        <Modal.Header className="font-bold">Relays</Modal.Header>
        <Modal.Body className="flex flex-col gap-4">
          {relays.length === 0 && (
            <>
              <Alert>No relays.</Alert>
            </>
          )}
          {relays.map(([url, relay], index) => {
            const connectedAt = relay.connectionStats.connectedAt
              ? new Date(relay.connectionStats.connectedAt)
              : undefined

            return (
              <div key={index} className="flex flex-col gap-1">
                <div className="font-bold">{url}</div>
                <div>
                  <Stats className="bg-base-200 shadow">
                    <Stats.Stat>
                      <Stats.Stat.Title>Attempts</Stats.Stat.Title>
                      <Stats.Stat.Value>{relay.connectionStats.attempts}</Stats.Stat.Value>
                      <Stats.Stat.Desc className="hidden">
                        The number of times a connection has been attempted.
                      </Stats.Stat.Desc>
                    </Stats.Stat>
                    <Stats.Stat>
                      <Stats.Stat.Title>Success</Stats.Stat.Title>
                      <Stats.Stat.Value>{relay.connectionStats.success}</Stats.Stat.Value>
                      <Stats.Stat.Desc className="hidden">
                        The number of times a connection has been successfully established.
                      </Stats.Stat.Desc>
                    </Stats.Stat>
                    <Stats.Stat>
                      <Stats.Stat.Title>Connected at</Stats.Stat.Title>
                      <Stats.Stat.Value>
                        {connectedAt
                          ? connectedAt.toLocaleTimeString(undefined, {
                              hour12: false,
                            })
                          : '?'}
                      </Stats.Stat.Value>
                      <Stats.Stat.Desc>{connectedAt ? connectedAt.toLocaleDateString() : '?'}</Stats.Stat.Desc>
                      <Stats.Stat.Desc className="hidden">
                        The time the current connection was established in milliseconds.
                      </Stats.Stat.Desc>
                    </Stats.Stat>
                    <Stats.Stat>
                      <Stats.Stat.Title>Status</Stats.Stat.Title>
                      <Stats.Stat.Value
                        className={classNames({
                          'text-green-300': relay.status === NDKRelayStatus.CONNECTING,
                          'text-green-500': relay.status === NDKRelayStatus.CONNECTED,
                          'text-green-400': relay.status === NDKRelayStatus.RECONNECTING,
                        })}
                      >
                        {NDKRelayStatus[relay.status]}
                      </Stats.Stat.Value>
                      <Stats.Stat.Desc className="hidden">The status of the connection.</Stats.Stat.Desc>
                    </Stats.Stat>
                  </Stats>
                </div>
              </div>
            )
          })}
        </Modal.Body>
      </Modal>
    </>
  )
}
