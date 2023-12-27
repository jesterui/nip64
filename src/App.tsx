import {
  createHashRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouteObject,
  RouterProvider,
  Outlet,
  To,
} from 'react-router-dom'
import { Theme } from 'react-daisyui'
import { IndexPage } from './pages/IndexPage'
import { SettingsPage } from './pages/SettingsPage'
import { AboutPage } from './pages/AboutPage'
import { Layout } from './components/Layout'
import { useSettings } from './contexts/SettingsContext'
import ROUTES from './routes'
import './App.css'
import SearchPage from './pages/SearchPage'
import ResourcesPage from './pages/ResourcesPage'
import ValidatePage from './pages/ValidatePage'

const projectVersion = process.env.REACT_APP_VERSION || '0.1.0-dev'

/* Using HashRouter for GitHub Pages compatibility */
const USE_HASH_ROUTER = true

const createRouter = (routes: RouteObject[]) => (USE_HASH_ROUTER ? createHashRouter : createBrowserRouter)(routes)

function Redirect({ to }: { to: To }) {
  return <Navigate to={to} replace={true} />
}

function App() {
  const { theme } = useSettings()

  const router = createRouter(
    createRoutesFromElements(
      <Route
        id="base"
        element={
          <>
            <div>
              <Outlet />
            </div>
          </>
        }
      >
        <Route
          id="parent"
          element={
            <>
              <Layout title={window.APP.APP_NAME} drawer={{}}>
                <Outlet />
              </Layout>
            </>
          }
        >
          <Route id="index" path={ROUTES.index} index element={<IndexPage />} />
          <Route id="search" path={ROUTES.search} element={<SearchPage />} />
          <Route id="resources" path={ROUTES.resources} element={<ResourcesPage />} />
          <Route id="settings" path={ROUTES.settings} element={<SettingsPage />} />
          <Route id="validate" path={ROUTES.validate} element={<ValidatePage />} />

          <Route
            id="about"
            path={ROUTES.about}
            element={
              <>
                <AboutPage name={window.APP.APP_NAME} version={`v${projectVersion}`} />
              </>
            }
          />
        </Route>
        <Route id="404" path="*" element={<Redirect to={ROUTES['*']} />} />
      </Route>,
    ),
  )

  return (
    <Theme dataTheme={theme || 'dark'}>
      <RouterProvider router={router} />
    </Theme>
  )
}

export default App
