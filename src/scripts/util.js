export function getApiUrl() {
  return process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_DEV
    : process.env.REACT_APP_API_PROD
}

export const profilePicUrl =
  "https://ik.imagekit.io/5xtlzx2c3y/website/profilePhoto.png?updatedAt=1734540694273"
export const blogPlaceholderImageUrl =
  "https://ik.imagekit.io/5xtlzx2c3y/website/blog/placeholder.jpeg"

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

export function pagePathnameToTitle(pathname) {
  const titleCase = x => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase()
  const formatName = name => titleCase(name.replaceAll("-", " "))
  const grabName = toRemove => formatName(pathname.substring(toRemove.length))

  if (pathname === "/") return "Home"
  else if (pathname === "/about-me") return "About Me"
  else if (pathname === "/portfolio") return "Portfolio"
  else if (pathname === "/art") return "Art"
  else if (pathname.includes("/art/zine/"))
    return "Art/Zine/" + grabName("/art/zine/")
  else if (pathname.includes("/art/")) return "Art/" + grabName("/art/")
  else if (pathname === "/blog") return "Blog"
  else if (pathname.includes("/blog/")) {
    const postName = grabName("/blog/")
    return "Blog/" + postName.substring(0, postName.length - 1)
  } else if (pathname === "/admin") return "Admin"
  else if (pathname === "/admin/blog") return "Admin/Blog"
  else if (pathname === "/admin/email") return "Admin/Email"
  else if (pathname === "/subscribe") return "Email/Subscribe"
  else if (pathname.includes("/unsubscribe")) return "Email/Unsubscribe"
  else if (pathname.includes("/confirmation")) return "Email/Confirmation"
  else return pathname
}

export function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
}
