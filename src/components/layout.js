/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { themes } from "../style/theme.js"

import CustomNav from "./nav"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};
  }
`

const Layout = ({ children }) => {
  let currentTheme = "light";
  if (typeof window !== 'undefined') {
    currentTheme = window.localStorage.getItem('theme');
  }
  const [isDarkMode, setDarkMode] = useState(currentTheme === "dark");
  const theme = themes[isDarkMode ? "dark" : "light"];

  const toggleDarkMode = themeState => {
    setDarkMode(themeState);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem("theme", themeState ? "dark" : "light");
    }
  };

  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lucia Gomez</title>
          <meta name="description" content="Portfolio website for Lucia Gomez, full stack web developer" />
          <meta name="keywords" content="Lucia, Gomez, web, developer, full, stack, full-stack, Javascript, React, Cornell, Facebook, ASL" />
          <meta name="robots" content="index, follow" />
          <script src="https://kit.fontawesome.com/9dd13a1052.js" crossOrigin="anonymous"></script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Roboto:wght@400;600&display=swap" rel="stylesheet"></link>
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-
        wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"></link>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>

          {isDarkMode ?
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/styles/base16/outrun-dark.min.css" /> :
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/styles/base16/one-light.min.css" />
          }

          <script async defer
            data-website-id="5b5deb3e-51e6-4091-bb02-0d6219a5dd95"
            src="https://umami-lg.herokuapp.com/umami.js"
            data-domains="lucia-gomez.netlify.app"
          ></script>
        </Helmet>
      </div>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <CustomNav {...{ isDarkMode, toggleDarkMode }} />
        <div>
          <main>{children}</main>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
