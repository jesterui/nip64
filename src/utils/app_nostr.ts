import { isDevMode } from './dev'

const developmentRelays = [
  'ws://localhost:7000',
  //'wss://non-existing-nostr-relay.example.com:7000'
]

const publicRelays = [
  'wss://nostr-pub.wellorder.net',
  'wss://relay.damus.io',
  'wss://relay.snort.social',
  'wss://nostr.swiss-enigma.ch',
]

const DEFAULT_RELAYS = [...(isDevMode() ? developmentRelays : []), ...publicRelays]

export const defaultRelays = () => DEFAULT_RELAYS
