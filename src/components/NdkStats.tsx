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
          <Stats.Stat.Item variant="title">Total</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">{stats?.total ?? '?'}</Stats.Stat.Item>
          <Stats.Stat.Item variant="desc">Total relays</Stats.Stat.Item>
        </Stats.Stat>
        <Stats.Stat>
          <Stats.Stat.Item variant="title">Connected</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">{stats?.connected ?? '?'}</Stats.Stat.Item>
          <Stats.Stat.Item variant="desc">Conntected relays</Stats.Stat.Item>
        </Stats.Stat>
        <Stats.Stat>
          <Stats.Stat.Item variant="title">Disconnected</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">{stats?.disconnected ?? '?'}</Stats.Stat.Item>
          <Stats.Stat.Item variant="desc">Disconntected relays</Stats.Stat.Item>
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
                      <Stats.Stat.Item variant="title">Attempts</Stats.Stat.Item>
                      <Stats.Stat.Item variant="value">{relay.connectionStats.attempts}</Stats.Stat.Item>
                      <Stats.Stat.Item variant="desc" className="hidden">
                        The number of times a connection has been attempted.
                      </Stats.Stat.Item>
                    </Stats.Stat>
                    <Stats.Stat>
                      <Stats.Stat.Item variant="title">Success</Stats.Stat.Item>
                      <Stats.Stat.Item variant="value">{relay.connectionStats.success}</Stats.Stat.Item>
                      <Stats.Stat.Item variant="desc" className="hidden">
                        The number of times a connection has been successfully established.
                      </Stats.Stat.Item>
                    </Stats.Stat>
                    <Stats.Stat>
                      <Stats.Stat.Item variant="title">Connected at</Stats.Stat.Item>
                      <Stats.Stat.Item variant="value">
                        {connectedAt
                          ? connectedAt.toLocaleTimeString(undefined, {
                              hour12: false,
                            })
                          : '?'}
                      </Stats.Stat.Item>
                      <Stats.Stat.Item variant="desc">
                        {connectedAt ? connectedAt.toLocaleDateString() : '?'}
                      </Stats.Stat.Item>
                      <Stats.Stat.Item variant="desc" className="hidden">
                        The time the current connection was established in milliseconds.
                      </Stats.Stat.Item>
                    </Stats.Stat>
                    <Stats.Stat>
                      <Stats.Stat.Item variant="title">Status</Stats.Stat.Item>
                      <Stats.Stat.Item
                        variant="value"
                        className={classNames({
                          'text-green-300': relay.status === NDKRelayStatus.CONNECTING,
                          'text-green-500': relay.status === NDKRelayStatus.CONNECTED,
                          'text-green-400': relay.status === NDKRelayStatus.RECONNECTING,
                        })}
                      >
                        {NDKRelayStatus[relay.status]}
                      </Stats.Stat.Item>
                      <Stats.Stat.Item variant="desc" className="hidden">
                        The status of the connection.
                      </Stats.Stat.Item>
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
