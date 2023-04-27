import "./style/index.css"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import About from "./pages/about"
import App from "./App"
import ArchivePage from "./pages/archive"
import ArtPage from "./pages/art"
import Auth0ProviderWithHistory from "./components/layout/auth0-provider-with-history"
import BlogAdmin from "./pages/admin"
import BlogHomePage from "./pages/blog"
import BlogPostPage from "./pages/blogPost"
import Error404 from "./pages/404"
import Layout from "./components/layout/layout"
import ProtectedRoute from "./components/layout/protectedRoute"
import React from "react"
import ReactDOM from "react-dom"
import ScrollToTop from "./ScrollToTop"
import ToadARPage from "./pages/projects/toadAR"
import ZinePage from "./pages/zine"

const _ = require("lodash")

function updateDocumentHeight() {
  const debounceResize = _.debounce(() => {
    document.documentElement.style.setProperty(
      "--doc-height",
      `${window.innerHeight}px`
    )
  }, 200)
  debounceResize()
}
window.addEventListener("resize", () => {
  updateDocumentHeight()
})
updateDocumentHeight()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ScrollToTop />
        <Layout>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route exact path="/about-me">
              <About />
            </Route>
            <Route path="/portfolio">
              <ArchivePage />
            </Route>
            <Route exact path="/blog">
              <BlogHomePage />
            </Route>
            <Route exact path="/blog/:slug">
              <BlogPostPage />
            </Route>
            <ProtectedRoute path="/admin" component={BlogAdmin} />
            <Route exact path="/art">
              <ArtPage />
            </Route>
            <Route exact path="/art/zine/:slug">
              <ZinePage />
            </Route>
            <Route path="/art/:slug">
              <ArtPage />
            </Route>
            <Route path="/toad-ar">
              <ToadARPage />
            </Route>
            <Route component={Error404} />
          </Switch>
        </Layout>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
