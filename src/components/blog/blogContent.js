import BlogStyle from "../../style/blogStyle"
import Prism from "prismjs"
import React from "react"
import { marked } from "marked"

require("prismjs/components/prism-bash")

marked.setOptions({
  highlight: function (code, lang) {
    if (Prism.languages[lang]) {
      return Prism.highlight(code, Prism.languages[lang], lang)
    } else {
      return code
    }
  },
})

const BlogContent = ({ content, className }) => {
  return (
    <BlogStyle className={className}>
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
    </BlogStyle>
  )
}

export default BlogContent
