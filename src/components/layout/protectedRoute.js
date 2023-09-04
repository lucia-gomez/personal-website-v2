import React from "react"
import { withAuthenticationRequired } from "@auth0/auth0-react"

const ProtectedRoute = ({ element }) => {
  const Component = withAuthenticationRequired(element, {
    onRedirecting: () => <p>Redirecting to admin login...</p>,
  })
  return <Component />
}

export default ProtectedRoute
