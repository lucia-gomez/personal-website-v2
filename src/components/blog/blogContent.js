import React, { useEffect, useRef } from "react"

import BlogStyle from "../../style/blogStyle"

const BlogContent = ({ content, className }) => {
  const contentRef = useRef()

  useEffect(() => {
    if (contentRef.current !== null) {
      const nodes = contentRef.current.querySelectorAll("pre")
      nodes.forEach(node => {
        // hljs.highlightElement(node)
      })
    }
  }, [content])

  return (
    <BlogStyle
      ref={contentRef}
      dangerouslySetInnerHTML={{ __html: content }}
      className={className}
    />
  )
}

export default BlogContent
