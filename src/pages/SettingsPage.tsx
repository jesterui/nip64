import { Form, Button, Checkbox, useTheme, Theme } from 'react-daisyui'

import { useSettings, useSettingsDispatch } from '../contexts/SettingsContext'
import { DataTheme } from 'react-daisyui/dist/types'

const DEFAULT_THEMES: DataTheme[] = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
]

type ThemeItemProps = {
  dataTheme: DataTheme
  selected: boolean
  onClick: (dataTheme: DataTheme) => void
}

function ThemeItem({ dataTheme, selected, onClick }: ThemeItemProps) {
  return (
    <>
      <Theme
        dataTheme={dataTheme}
        role="button"
        aria-label="Theme select"
        aria-pressed={selected}
        tabIndex={0}
        onClick={() => onClick(dataTheme)}
        className="border-base-content/20 hover:border-base-content/40 outline-base-content  rounded-lg  overflow-hidden border outline-2 outline-offset-2"
      >
        <div className="grid grid-cols-5 grid-rows-3">
          <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
          <div className="bg-base-300 col-start-1 row-start-3"></div>
          <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
            <div className="font-bold">{dataTheme}</div>
            <div className="flex flex-wrap gap-1">
              <Button size="xs" color="primary">
                A
              </Button>
              <Button size="xs" color="secondary">
                A
              </Button>
              <Button size="xs" color="accent">
                A
              </Button>
              <Button size="xs" color="ghost">
                A
              </Button>
            </div>
          </div>
        </div>
      </Theme>
    </>
  )
}

export function SettingsPage() {
  const settings = useSettings()
  const settingsDispatch = useSettingsDispatch()

  const { theme, setTheme } = useTheme()

  const updateTheme = (val: string) => {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', val)

    settingsDispatch({ theme: val })
    setTheme(val)
  }

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tighter">Settings</h2>
      <div className="text-lg">{/* TODO: add subtitle */}</div>

      <div className="mb-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold tracking-tighter">Theme</h2>

        <div className="flex flex-wrap gap-4">
          <div className="grid grid-cols-4 gap-4">
            {DEFAULT_THEMES.map((t, i) => (
              <ThemeItem
                key={`theme_${t}_#${i}`}
                dataTheme={t}
                selected={t === theme}
                onClick={() => {
                  updateTheme(t)
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold tracking-tighter">Developer Settings</h2>
        <div className="flex gap-2">
          <div className="flex items-center">
            <Checkbox
              id="developer-mode-checkbox"
              checked={settings.dev}
              onChange={() => settingsDispatch({ dev: !settings.dev })}
            />
          </div>
          <div className="flex flex-col p-2">
            <Form.Label htmlFor="developer-mode-checkbox" title="Enable Developer Mode" className="p-0" />
            <span className="text-gray-500 dark:text-gray-300 text-xs font-normal">
              Append debug information to pages or console
            </span>
          </div>
        </div>
      </div>

      {settings.dev && (
        <div className="mt-8">
          <h6 className="font-bold font-mono ">[debug]</h6>
          <h6 className="font-mono">settings</h6>
          <div className="mb-4">
            <pre>{`${JSON.stringify(settings, null, 2)}`}</pre>
          </div>
        </div>
      )}
    </>
  )
}
