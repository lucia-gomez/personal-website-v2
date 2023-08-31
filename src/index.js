import "./style/index.css"

import App from "./App"
import React from "react"
import { createRoot } from "react-dom/client"

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

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
