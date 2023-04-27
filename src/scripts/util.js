export function getApiUrl() {
  return process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_DEV
    : process.env.REACT_APP_API_PROD
}

export const profilePicUrl =
  "https://ik.imagekit.io/5xtlzx2c3y/website/profilePhoto.png"
export const blogPlaceholderImageUrl =
  "https://ik.imagekit.io/5xtlzx2c3y/website/blog/placeholder.jpeg"

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

// https://stackoverflow.com/a/66124172
function getRgb(color) {
  let [r, g, b] = color
    .replace("rgb(", "")
    .replace(")", "")
    .split(",")
    .map(str => Number(str))
  return {
    r,
    g,
    b,
  }
}

// https://stackoverflow.com/a/66124172
export function colorInterpolate(colorA, colorB, intval) {
  const rgbA = getRgb(colorA),
    rgbB = getRgb(colorB)
  const colorVal = prop =>
    Math.round(rgbA[prop] * (1 - intval) + rgbB[prop] * intval)
  return `rgb(${colorVal("r")}, ${colorVal("g")}, ${colorVal("b")})`
}

export function resetAnimation(el) {
  el.style.animationName = "none"
  el.style.webkitAnimationName = "none"
  requestAnimationFrame(() => {
    setTimeout(() => {
      el.style.animationName = ""
      el.style.webkitAnimationName = ""
    }, 0)
  })
}
