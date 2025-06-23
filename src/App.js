import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"

import About from "./pages/about"
import ArchivePage from "./pages/archive"
import Auth0ProviderWithHistory from "./components/layout/auth0-provider-with-history"
import BlogHomePage from "./pages/blog"
import BlogLoading from "./components/blog/blogLoading"
import BlogPostPage from "./pages/blogPost"
import Error404 from "./pages/404"
import LandingPage from "./pages/landing"
import Layout from "./components/layout/layout"
import ProtectedRoute from "./components/layout/protectedRoute"
import ScrollWithLink from "./ScrollWithLink"
import WordpressRedirect from "./pages/wordpress"
import ZinePage from "./pages/zine"

const Admin = lazy(() => import("./pages/admin"))
const AdminBlog = lazy(() => import("./pages/adminBlog"))
const AdminEmail = lazy(() => import("./pages/adminEmail"))

const ConfirmationPage = lazy(() => import("./pages/confirmation"))
const SubscribePage = lazy(() => import("./pages/subscribe"))
const UnsubscribePage = lazy(() => import("./pages/unsubscribe"))

const ArtPage = lazy(() => import("./pages/art"))
const Collagescape = lazy(() => import("./pages/projects/collagescape"))
const RisoWoodles = lazy(() => import("./pages/projects/risoWoodles"))
const ThreeDObjectPage = lazy(() => import("./pages/projects/3dModel"))
const ThreeJsObjectPage = lazy(() => import("./pages/projects/3dModel"))
const ToadARPage = lazy(() => import("./pages/projects/toadAR"))
const DJello = lazy(() => import("./pages/projects/djello"))

const Shaders1 = lazy(() => import("./pages/projects/shaders1"))
const Shaders31 = lazy(() => import("./pages/projects/shaders3-1"))
const Shaders32 = lazy(() => import("./pages/projects/shaders3-2"))
const Shaders4 = lazy(() => import("./pages/projects/shaders4"))
const Shaders5 = lazy(() => import("./pages/projects/shaders5"))
const Shaders6 = lazy(() => import("./pages/projects/shaders6"))

export default function App() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ScrollWithLink />
        <Layout>
          <Suspense fallback={<BlogLoading />}>
            <Routes>
              <Route path="*" element={<Error404 />} />
              <Route exact path="/" element={<LandingPage />}></Route>
              <Route exact path="/about-me" element={<About />}></Route>
              <Route path="/portfolio" element={<ArchivePage />}></Route>
              <Route exact path="/blog" element={<BlogHomePage />}></Route>
              <Route
                exact
                path="/blog/:slug"
                element={<BlogPostPage />}
              ></Route>
              <Route
                element={<ProtectedRoute element={Admin} />}
                exact
                path="/admin"
              />
              <Route
                element={<ProtectedRoute element={AdminBlog} />}
                exact
                path="/admin/blog"
              />
              <Route
                element={<ProtectedRoute element={AdminEmail} />}
                exact
                path="/admin/email"
              />
              <Route exact path="/art" element={<ArtPage />}></Route>
              <Route exact path="/art/zine/:slug" element={<ZinePage />} />
              <Route
                exact
                path="/art/3d/:slug"
                element={<ThreeDObjectPage />}
              />
              <Route path="/art/waffle" element={<ThreeJsObjectPage />}></Route>
              <Route path="/art/:slug" element={<ArtPage />}></Route>
              <Route
                path="/art/series/riso-woodles"
                element={<RisoWoodles />}
              ></Route>
              <Route
                path="/art/series/riso-woodles/:id"
                element={<RisoWoodles />}
              ></Route>
              <Route
                path="/confirmation/:emailHash"
                element={<ConfirmationPage />}
              ></Route>
              <Route
                exact
                path="/subscribe"
                element={<SubscribePage />}
              ></Route>
              <Route
                path="/unsubscribe/:emailHash"
                element={<UnsubscribePage />}
              ></Route>
              <Route path="/toad-ar" element={<ToadARPage />}></Route>
              <Route path="/project/djello" element={<DJello />}></Route>
              <Route
                path="/project/shaders/week1"
                element={<Shaders1 />}
              ></Route>
              <Route
                path="/project/shaders/week3-1"
                element={<Shaders31 />}
              ></Route>
              <Route
                path="/project/shaders/week3-2"
                element={<Shaders32 />}
              ></Route>
              <Route
                path="/project/shaders/week4"
                element={<Shaders4 />}
              ></Route>
              <Route
                path="/project/shaders/week5"
                element={<Shaders5 />}
              ></Route>
              <Route
                path="/project/shaders/week6"
                element={<Shaders6 />}
              ></Route>
              <Route
                path="/art/series/collagescape"
                element={<Collagescape />}
              ></Route>
              <Route
                path="/art/series/collagescape/:id"
                element={<Collagescape />}
              ></Route>
              <Route path="/classBlog" element={<WordpressRedirect />}></Route>
            </Routes>
          </Suspense>
        </Layout>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  )
}
