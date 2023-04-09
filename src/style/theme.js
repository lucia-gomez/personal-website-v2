export const colors = {
  white: "#f7f7f7",
  gray: "#717171",
  black: "#18062e",
}

export const themes = {
  light: {
    bg: colors.white,
    medium: "#ebebeb",
    header: colors.black,
    text: colors.gray,
    textLight: "#c5c5c5",
    accent: "#AB47BC",
    accentHover: "#CE93D8",
    accentLight: "#edccf3",
    textInv: colors.white,
  },
  default: {
    bg: "#221a2a",
    medium: "#2F2939",
    header: colors.white,
    text: "#f7f0ff",
    textLight: colors.white,
    accent: "#1ebf66",
    accentHover: "#f28034",
    accentLight: "#245944",
    textInv: colors.black,
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
