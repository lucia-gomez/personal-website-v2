import { pagePathnameToTitle } from "./util"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    window.gtag("event", "page_view", {
      page_location: location.pathname,
      page_title: pagePathnameToTitle(location.pathname),
    })
  }, [location])
}

export default usePageTracking
