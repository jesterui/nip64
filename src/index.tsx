import ReactDOM from 'react-dom/client'
import { SettingsProvider } from './contexts/SettingsContext'
import { NDKProvider } from '@nostr-dev-kit/ndk-react'
import { isDevMode } from './utils/dev'
import { defaultRelays } from './utils/app_nostr'
import App from './App'

import './index.css'

declare global {
  interface AppGlobal {
    APP_NAME: string
    SETTINGS_STORE_KEY: string
  }

  interface Window {
    APP: AppGlobal
  }
}

const defaultAppSettings = {
  dev: isDevMode(),
  theme: 'dark',
}

const relayUrls = defaultRelays()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <>
    <SettingsProvider value={{ defaultValues: defaultAppSettings }}>
      <NDKProvider relayUrls={relayUrls}>
        <App />
      </NDKProvider>
    </SettingsProvider>
  </>,
)
