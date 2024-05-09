import { useEffect, useRef } from "react"

import { useLocation } from "react-router-dom"

const skipList = [new RegExp("/art/[^/]+/?$")]

function scrollToElementWithOffset(element, offset) {
  if (element == null) {
    return
  }
  const elementRect = element.getBoundingClientRect()

  const currentScrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop
  const targetScrollTop = currentScrollTop + elementRect.top
  const scrollToPosition = targetScrollTop - offset

  window.scrollTo({
    top: scrollToPosition,
    behavior: "smooth",
  })
}

export default function ScrollWithLink() {
  const { pathname, hash } = useLocation()
  const isInitialMount = useRef(true)
  const previousPathname = useRef()

  useEffect(() => {
    // if navigated to a new page and url includes a hash anchor, scroll to it
    if (hash.length > 0 && pathname !== previousPathname.current) {
      if (isInitialMount.current) {
        isInitialMount.current = false
        return
      }

      const scroller = () =>
        scrollToElementWithOffset(
          document.getElementById(hash.substring(1)),
          60
        )
      setTimeout(scroller, 500)
      return
    }

    for (let skip of skipList) {
      if (skip.test(pathname)) {
        return
      }
    }

    // only scroll to top if it's a new page and no hash anchor
    if (pathname !== previousPathname.current) {
      window.scrollTo(0, 0)
    }
    previousPathname.current = pathname
  }, [hash, pathname])
  return null
}
