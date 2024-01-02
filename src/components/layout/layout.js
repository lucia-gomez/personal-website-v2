import React, { useState } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"

import BackgroundSketch from "./backgroundSketch.js"
import CustomNav from "./nav.js"
import Footer from "./footer.js"
import SubscribeButtonPinned from "./subscribeButtonPinned.js"
import styled from "styled-components"
import { themes } from "../../style/theme.js"
import { useLocation } from "react-router-dom"
import usePageTracking from "../../scripts/usePageTracking.js"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.accentLight};
  }

  main {
    min-height: 100vh;
    min-height: var(--doc-height);
  }
`

const SketchWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: clip;
  position: absolute;
  top: 0;
  z-index: -1;

  canvas {
    mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.1) 15%,
        rgba(0, 0, 0, 0.5) 50%,
        rgba(0, 0, 0, 0.1) 90%
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, white 30%);
  }
`

export default function Layout(props) {
  const { children } = props
  const { pathname } = useLocation()
  let currentTheme = "default"
  const storedTheme = window.localStorage.getItem("lucia-gomez-theme")
  if (typeof window !== "undefined" && storedTheme != null) {
    currentTheme = storedTheme
  }
  const [theme] = useState(themes[currentTheme])
  usePageTracking()

  const hideSubscribeButton = () =>
    pathname === "/subscribe" ||
    pathname === "/" ||
    pathname.includes("/portfolio") ||
    pathname.includes("/admin") ||
    pathname.includes("/blog/") ||
    pathname.includes("/art/zine/") ||
    pathname.includes("/unsubscribe") ||
    pathname.includes("/confirmation")

  const showSketchBg = () => pathname === "/subscribe"

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <CustomNav />
      {!hideSubscribeButton() && <SubscribeButtonPinned />}
      <main>
        {children}
        {showSketchBg() && (
          <SketchWrapper>
            <BackgroundSketch />
          </SketchWrapper>
        )}
      </main>
      {pathname !== "/" && <Footer />}
    </ThemeProvider>
  )
}
