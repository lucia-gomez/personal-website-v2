import { useEffect } from "react"
import { useLocation } from "react-router-dom"
export default function WordpressRedirect() {
  const location = useLocation()
  useEffect(() => {
    const post = location.pathname.substring(location.pathname.indexOf("/", 1))
    window.location.href = "https://goluciago.wordpress.com" + post
  }, [location])
  return null
}
