import { render, screen } from '@testing-library/react'
import { SettingsProvider } from './contexts/SettingsContext'
import App from './App'

window.APP = {
  APP_NAME: 'test-app-name',
  SETTINGS_STORE_KEY: 'test-app-settings-key',
}

it('should render app title', () => {
  render(
    <SettingsProvider value={{ defaultValues: global.__DEV__.APP_SETTINGS }}>
      <App />
    </SettingsProvider>,
  )

  const sidebarTitle = screen.getByTestId('sidebar-title')
  expect(sidebarTitle).toBeVisible()

  const ndoesWithAppTitle = screen.queryAllByText(window.APP.APP_NAME)
  ndoesWithAppTitle.forEach((it) => expect(it).toBeVisible())
})

it('should render sidebar title', () => {
  render(
    <SettingsProvider value={{ defaultValues: global.__DEV__.APP_SETTINGS }}>
      <App />
    </SettingsProvider>,
  )

  const sidebarTitle = screen.getByTestId('sidebar-title')
  expect(sidebarTitle).toBeInTheDocument()
})
