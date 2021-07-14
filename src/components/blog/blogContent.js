import React, { useRef, useEffect } from 'react';
import BlogStyle from '../../style/blogStyle';

import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';

const hljs = require('highlight.js');
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);

const BlogContent = ({ content, className }) => {
  const contentRef = useRef();

  useEffect(() => {
    if (contentRef.current !== null) {
      const nodes = contentRef.current.querySelectorAll('pre');
      nodes.forEach((node) => {
        hljs.highlightElement(node);
      })
    }
  }, [content])

  return (
    <BlogStyle ref={contentRef} dangerouslySetInnerHTML={{ __html: content }} className={className} />
  );
}

export default BlogContent;