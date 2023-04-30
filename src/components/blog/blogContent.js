import BlogStyle from "../../style/blogStyle"
import React from "react"
import { marked } from "marked"
import prism from "prismjs"

marked.setOptions({
  highlight: function (code, lang) {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang)
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
