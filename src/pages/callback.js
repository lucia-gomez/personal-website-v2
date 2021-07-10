import React from "react"
import { handleAuthentication } from "../scripts/auth"

const Callback = () => {
  handleAuthentication()

  return <p>Loading admin page...</p>
}

export default Callback