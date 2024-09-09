import { Footer as DaisyFooter } from 'react-daisyui'
import { Link } from 'react-router-dom'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import ROUTES from '../routes'
import { NdkStats } from './NdkStats'

export function Footer() {
  return (
    <div className="bg-base-300 text-base-300-content sticky top-[100vh] p-10">
      <DaisyFooter className="md:container mx-auto">
        <div>
          <DaisyFooter.Title>Pages</DaisyFooter.Title>
          <Link className="link link-hover" to={ROUTES.index}>
            Home
          </Link>

          <Link className="link link-hover" to={ROUTES.validate}>
            Validate
          </Link>

          <Link className="link link-hover" to={ROUTES.search}>
            Search
          </Link>

          <Link className="link link-hover" to={ROUTES.resources}>
            Resources
          </Link>
        </div>
        <div>
          <DaisyFooter.Title>More</DaisyFooter.Title>
          <Link className="link link-hover" to={ROUTES.settings}>
            Settings
          </Link>
          <Link className="link link-hover" to={ROUTES.about}>
            About
          </Link>
          <a
            className="link link-hover flex items-center"
            href="https://github.com/nostr-protocol/nips/blob/master/64.md"
            target="_blank"
            rel="noreferrer"
          >
            NIP-64 (GitHub) <ArrowTopRightOnSquareIcon className="ms-1 w-4 h-4" />
          </a>
        </div>
        <div className="hidden md:block"></div>
        <div className="flex w-full lg:justify-end">
          <NdkStats />
        </div>
      </DaisyFooter>
    </div>
  )
}
