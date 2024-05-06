import BlogStyle from "../../style/blogStyle"
import Prism from "prismjs"
import React from "react"
import { marked } from "marked"
import tokenizer from "../../style/markdownTokenizer"

require("prismjs/components/prism-bash")
require("prismjs/components/prism-c")
require("prismjs/components/prism-cpp")
require("prismjs/components/prism-arduino")

marked.setOptions({
  highlight: function (code, lang) {
    if (Prism.languages[lang]) {
      return Prism.highlight(code, Prism.languages[lang], lang)
    } else {
      return code
    }
  },
})
marked.use({ tokenizer })

const BlogContent = props => {
  const { content } = props
  return (
    <BlogStyle {...props}>
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
    </BlogStyle>
  )
}

export default BlogContent
