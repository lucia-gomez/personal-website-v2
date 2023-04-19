import React, { useState } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"

import CustomNav from "./nav.js"
import Footer from "./footer.js"
import GradientBackground from "./gradient.js"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { themes } from "../../style/theme.js"
import { useLocation } from "react-router-dom"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.accent};
  }

  main {
    min-height: 100vh;
    min-height: var(--doc-height);
  }
`

const Layout = props => {
  const { children, gradientEnabled = true } = props
  const { pathname } = useLocation()
  let currentTheme = "default"
  const storedTheme = window.localStorage.getItem("lucia-gomez-theme")
  if (typeof window !== "undefined" && storedTheme != null) {
    currentTheme = storedTheme
  }
  const [theme] = useState(themes[currentTheme])

  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lucia Gomez</title>
          <meta name="robots" content="index, follow" />
          <script
            src="https://kit.fontawesome.com/9dd13a1052.js"
            crossOrigin="anonymous"
          ></script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Playfair+Display:wght@900&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-
        wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
          ></link>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/styles/a11y-dark.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <script
            async
            defer
            data-website-id="5b5deb3e-51e6-4091-bb02-0d6219a5dd95"
            src="https://umami-lg.herokuapp.com/umami.js"
            data-domains="lucia-gomez.netlify.app"
          ></script>
        </Helmet>
      </div>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <CustomNav />
        {gradientEnabled && <GradientBackground />}
        <main>{children}</main>
        {pathname !== "/" && <Footer />}
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  gradientEnabled: PropTypes.bool,
}

export default Layout
