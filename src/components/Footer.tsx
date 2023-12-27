import { Footer as DaisyFooter } from 'react-daisyui'
import { Link } from 'react-router-dom'
import ROUTES from '../routes'
import { NdkStats } from './NdkStats'

export function Footer() {
  return (
    <div className="bg-base-300 text-base-300-content sticky top-[100vh] p-10">
      <DaisyFooter className="md:container mx-auto">
        <div>
          <DaisyFooter.Title>Services</DaisyFooter.Title>
          <Link className="link link-hover" to={ROUTES.index}>
            Index
          </Link>

          <Link className="link link-hover" to={ROUTES.search}>
            Search
          </Link>

          <Link className="link link-hover" to={ROUTES.resources}>
            Resources
          </Link>
        </div>
        <div>
          <DaisyFooter.Title>App</DaisyFooter.Title>
          <Link className="link link-hover" to={ROUTES.settings}>
            Settings
          </Link>
          <Link className="link link-hover" to={ROUTES.about}>
            About
          </Link>
        </div>
        <div className="hidden md:block"></div>
        <div className="flex w-full lg:justify-end">
          <NdkStats />
        </div>
      </DaisyFooter>
    </div>
  )
}
