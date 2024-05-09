import BlogStyle from "../../style/blogStyle"
import Prism from "prismjs"
import React from "react"
import { marked } from "marked"
import tokenizer from "../../style/markdownTokenizer"

require("prismjs/components/prism-bash")
require("prismjs/components/prism-c")
require("prismjs/components/prism-cpp")
require("prismjs/components/prism-arduino")

var renderer = new marked.Renderer()
renderer.link = function (href, title, text) {
  let link = marked.Renderer.prototype.link.call(this, href, title, text)

  if (href.includes("http") || href.includes("www")) {
    return link.replace("<a", "<a target='_blank'")
  }
  return link
}

renderer.heading = function (text, level, raw, slugger) {
  const id = slugger.slug(raw)
  return `<h${level} id="${id}"><a href='#${id}'>${text}</a></h${level}>\n`
}

marked.setOptions({
  renderer: renderer,
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
