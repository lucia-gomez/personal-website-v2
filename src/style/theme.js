export const colors = {
  white: "#f7f0ff",
  black: "#18062e",
}

export const themes = {
  default: {
    bg: "#221a2a",
    medium: "#2F2939",
    text: "#f7f0ff",
    textLight: colors.white,
    accent: "#1ebf66",
    accentHover: "#f28034",
    accentLight: "#10532e",
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
