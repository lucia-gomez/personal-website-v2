export const colors = {
  white: "#f7f0ff",
  black: "#18062e",
}

export const themes = {
  default: {
    bg: "#070509",
    medium: "#a1748c",
    text: colors.white,
    textInv: colors.black,
    accent: "#d43d6b",
    accentHover: "#dba42e",
    accentLight: "#872040",
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
