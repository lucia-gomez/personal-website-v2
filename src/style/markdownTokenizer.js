const tokenizer = {
  html(src) {
    const match = src.match(
      /^(?:<iframe\b[^>]*>[\s\S]*?<\/iframe>|<video\b[^>]*>[\s\S]*?<\/video>|<audio\b[^>]*>[\s\S]*?<\/audio>)/
    )
    if (match) {
      return {
        type: "html",
        raw: match[0],
        text: match[0].trim(),
      }
    }

    return false
  },
}

export default tokenizer
