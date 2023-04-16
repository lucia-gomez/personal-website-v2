export function getApiUrl() {
  return process.env.NODE_ENV === "dev"
    ? process.env.REACT_APP_API_DEV
    : process.env.REACT_APP_API_PROD
}

// https://stackoverflow.com/a/37285344
export function isScrolledIntoViewVertical(container, element, partial) {
  let cTop = container.scrollTop
  let cBottom = cTop + container.clientHeight

  let eTop = element.offsetTop
  let eBottom = eTop + element.clientHeight

  let isTotal = eTop >= cTop && eBottom <= cBottom
  let isPartial =
    partial &&
    ((eTop < cTop && eBottom > cTop) || (eBottom > cBottom && eTop < cBottom))

  return isTotal || isPartial
}

export function isScrolledIntoViewHorizontal(
  container,
  element,
  partial,
  offset = 0
) {
  let cLeft = container.scrollLeft
  let cRight = cLeft + container.clientWidth + offset

  let eLeft = element.offsetLeft
  let eRight = eLeft + element.clientWidth

  let isTotal = eLeft >= cLeft && eRight <= cRight
  let isPartial =
    partial &&
    ((eLeft < cLeft && eRight > cLeft) || (eRight > cRight && eLeft < cRight))

  return isTotal || isPartial
}
