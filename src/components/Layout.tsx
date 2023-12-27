import { PropsWithChildren, ReactNode, useState } from 'react'
import { Drawer, DrawerProps } from 'react-daisyui'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

type LayoutProps = {
  title: ReactNode
  drawer: Partial<DrawerProps>
}

export function Layout({ title, children, drawer }: PropsWithChildren<LayoutProps>) {
  const [sidebarVisible, setSitebarVisible] = useState(false)
  const toggleSidebarVisible = () => setSitebarVisible((current) => !current)

  return (
    <Drawer
      {...drawer}
      side={<Sidebar title={title} />}
      sideClassName="z-50"
      end={false}
      open={sidebarVisible}
      onClickOverlay={toggleSidebarVisible}
      className="min-h-screen"
    >
      <Navbar title={title} toggleSidebar={toggleSidebarVisible} />
      <div className="md:container mx-auto">
        <div className="px-4 pb-32">{children}</div>
      </div>
      <Footer />
    </Drawer>
  )
}
