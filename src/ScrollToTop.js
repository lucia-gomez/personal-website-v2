import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const skipList = [new RegExp("/art/[^/]+/?$")]

export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    for (let skip of skipList) {
      if (skip.test(pathname)) {
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
