import { useEffect } from "react"
import { useLocation } from "react-router-dom"
export default function WordpressRedirect() {
  const location = useLocation()
  useEffect(() => {
    let post
    if (
      location.pathname === "/classBlog" ||
      location.pathname === "/classBlog/"
    )
      post = ""
    else post = location.pathname.substring(location.pathname.indexOf("/", 1))
    window.location.href = "https://goluciago.wordpress.com" + post
  }, [location])
  return null
}
