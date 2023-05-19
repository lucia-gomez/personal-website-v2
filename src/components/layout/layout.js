import React, { useState } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"

import CustomNav from "./nav.js"
import Footer from "./footer.js"
import GradientBackground from "./gradient.js"
import SubscribeButtonPinned from "./subscribeButtonPinned.js"
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

  const hideSubscribeButton = () =>
    pathname === "/subscribe" ||
    pathname === "/" ||
    pathname.includes("/admin") ||
    pathname.includes("/blog/") ||
    pathname.includes("/art/zine/") ||
    pathname.includes("/unsubscribe") ||
    pathname.includes("/confirmation")

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <CustomNav />
      {!hideSubscribeButton() && <SubscribeButtonPinned />}
      {gradientEnabled && <GradientBackground />}
      <main>{children}</main>
      {pathname !== "/" && <Footer />}
    </ThemeProvider>
  )
}

export default Layout
