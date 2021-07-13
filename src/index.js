import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './style/index.css';
import App from './App';
import ArchivePage from './pages/archive';
import BlogHomePage from './pages/blog';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from './components/protectedRoute';
import BlogPostPage from './pages/blogPost';
import BlogAdmin from './pages/admin';
import Auth0ProviderWithHistory from "./scripts/auth0-provider-with-history";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/archive">
            <ArchivePage />
          </Route>
          <Route exact path="/blog">
            <BlogHomePage />
          </Route>
          <Route exact path="/blog/:slug">
            <BlogPostPage />
          </Route>
          <ProtectedRoute path="/admin" component={BlogAdmin} />
        </Switch>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
