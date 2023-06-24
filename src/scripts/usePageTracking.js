import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    window.gtag("event", "page_view", {
      page_location: location.pathname + location.search,
    })
  }, [location])
}

export default usePageTracking
