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
import ConfirmationPage from "./pages/confirmation"
import Error404 from "./pages/404"
import LandingPage from "./pages/landing"
import Layout from "./components/layout/layout"
import ProtectedRoute from "./components/layout/protectedRoute"
import ScrollToTop from "./ScrollToTop"
import SubscribePage from "./pages/subscribe"
import ToadARPage from "./pages/projects/toadAR"
import UnsubscribePage from "./pages/unsubscribe"
import ZinePage from "./pages/zine"

export default function App() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ScrollToTop />
        <Layout>
          <Routes>
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
            <Route path="/art/:slug" element={<ArtPage />}></Route>
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
            <Route element={Error404} />
          </Routes>
        </Layout>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  )
}
