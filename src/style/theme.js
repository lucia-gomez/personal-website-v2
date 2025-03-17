export const colors = {
  white: "#f7f0ff",
  black: "#000000",
}

export const themes = {
  default: {
    bg: "#141414",
    medium: "#7e7e7e",
    text: colors.white,
    textInv: colors.black,
    accent: "#9e84f5",
    accentHover: "#7852f7",
    accentLight: "#cec0fc",
  },
}

export function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha !== null) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")"
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")"
  }
}
