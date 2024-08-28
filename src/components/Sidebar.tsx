import { PropsWithChildren, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import {
  HomeIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  DocumentCheckIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'
import { Menu } from 'react-daisyui'
import ROUTES from '../routes'

interface SidebarProps {
  title: ReactNode
}

export function Sidebar({ title, children }: PropsWithChildren<SidebarProps>) {
  return (
    <div className="menu w-80 md:w-80 bg-base-100 h-screen">
      <Menu horizontal={false} className="gap-2">
        <Menu.Title className="mb-2">{title}</Menu.Title>
        <Menu.Item>
          <NavLink to={ROUTES.index}>
            <HomeIcon className="w-6 h-6" />
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to={ROUTES.validate}>
            <DocumentCheckIcon className="w-6 h-6" />
            Validate
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to={ROUTES.search}>
            <GlobeAltIcon className="w-6 h-6" />
            Search
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to={ROUTES.resources}>
            <InformationCircleIcon className="w-6 h-6" />
            Resources
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to={ROUTES.settings}>
            <WrenchScrewdriverIcon className="w-6 h-6" />
            Settings
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="https://github.com/nostr-protocol/nips/blob/master/64.md" target="_blank">
            <ArrowTopRightOnSquareIcon className="w-6 h-6" />
            NIP-64
          </NavLink>
        </Menu.Item>
      </Menu>
      <>{children}</>
    </div>
  )
}
