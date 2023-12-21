import { ReactNode } from 'react'

type AboutPageProps = {
  name: ReactNode
  version: string
}

export function AboutPage({ name, version }: AboutPageProps) {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tighter">About</h2>
      <div className="text-lg text-slate-500 break-all">
        <span>{name}</span> {version}
      </div>

      <div className="my-4">
        <ul>
          <li>
            <a className="link link-hover" href="https://tailwindcss.com/">
              Tailwind CSS
            </a>
          </li>
          <li>
            <a className="link link-hover" href="https://daisyui.com/components">
              Daisy UI Components
            </a>
          </li>
          <li>
            <a className="link link-hover" href="https://react.daisyui.com/">
              React Daisy UI
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
