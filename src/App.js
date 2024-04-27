import { BrowserRouter, Route, Routes } from "react-router-dom"

import About from "./pages/about"
import Admin from "./pages/admin"
import AdminBlog from "./pages/adminBlog"
import AdminEmail from "./pages/adminEmail"
import ArchivePage from "./pages/archive"
import ArtPage from "./pages/art"
import Auth0ProviderWithHistory from "./components/layout/auth0-provider-with-history"
import BlogHomePage from "./pages/blog"
import BlogPostPage from "./pages/blogPost"
import Collagescape from "./pages/projects/collagescape"
import ConfirmationPage from "./pages/confirmation"
import DJello from "./pages/projects/djello"
import Error404 from "./pages/404"
import LandingPage from "./pages/landing"
import Layout from "./components/layout/layout"
import ProtectedRoute from "./components/layout/protectedRoute"
import RisoWoodles from "./pages/projects/risoWoodles"
import ScrollToTop from "./ScrollToTop"
import Shaders1 from "./pages/projects/shaders1"
import Shaders31 from "./pages/projects/shaders3-1"
import Shaders32 from "./pages/projects/shaders3-2"
import Shaders4 from "./pages/projects/shaders4"
import Shaders5 from "./pages/projects/shaders5"
import Shaders6 from "./pages/projects/shaders6"
import SubscribePage from "./pages/subscribe"
import ThreeDObjectPage from "./pages/projects/3dModel"
import ThreeJsObjectPage from "./pages/projects/3dModel"
import ToadARPage from "./pages/projects/toadAR"
import UnsubscribePage from "./pages/unsubscribe"
import WordpressRedirect from "./pages/wordpress"
import ZinePage from "./pages/zine"

export default function App() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/about-me" element={<About />}></Route>
            <Route path="/portfolio" element={<ArchivePage />}></Route>
            <Route exact path="/blog" element={<BlogHomePage />}></Route>
            <Route exact path="/blog/:slug" element={<BlogPostPage />}></Route>
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
            <Route exact path="/art/3d/:slug" element={<ThreeDObjectPage />} />
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
            <Route exact path="/subscribe" element={<SubscribePage />}></Route>
            <Route
              path="/unsubscribe/:emailHash"
              element={<UnsubscribePage />}
            ></Route>
            <Route path="/toad-ar" element={<ToadARPage />}></Route>
            <Route path="/project/djello" element={<DJello />}></Route>
            <Route path="/project/shaders/week1" element={<Shaders1 />}></Route>
            <Route
              path="/project/shaders/week3-1"
              element={<Shaders31 />}
            ></Route>
            <Route
              path="/project/shaders/week3-2"
              element={<Shaders32 />}
            ></Route>
            <Route path="/project/shaders/week4" element={<Shaders4 />}></Route>
            <Route path="/project/shaders/week5" element={<Shaders5 />}></Route>
            <Route path="/project/shaders/week6" element={<Shaders6 />}></Route>
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
        </Layout>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  )
}
