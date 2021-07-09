import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import { Link } from "gatsby"
import Like from '../components/blog/like';
import BlogStyle from '../style/blogStyle';

import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';

const hljs = require('highlight.js');
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);

const BlogWrapper = styled.div`
  padding: 0px 30px;
  position: relative;
  display: grid;
  grid-template-columns: 250px 1fr;
`;

const Sidebar = styled.div`
  background-color: ${props => props.theme.bg};
  height: 300px;
  position: sticky;
  top: 60px;
  align-self: start;
  text-align: left;
`;

const Content = styled.div`
  padding: 0px 40px;
  height: 1000px;
  text-align: left;
`;

const BackButton = styled(Link)`
  color: ${props => props.theme.accent};
  padding-bottom: 10px;

  :hover {
    color: ${props => props.theme.accentHover};
    text-decoration: none;
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.header};
  font-weight: 900;
`;

const Date = styled.p`
  color: ${props => props.theme.textLight};
`;

export default function BlogPostPage({ pageContext: { post } }) {
  const contentRef = useRef();

  useEffect(() => {
    const nodes = contentRef.current.querySelectorAll('pre');
    nodes.forEach((node) => {
      hljs.highlightElement(node);
    })
  }, [contentRef])

  return (
    <Layout>
      <Section id="archive" index={0}>
        <BlogWrapper>
          <Sidebar>
            <BackButton to="/blog">
              <i className="fas fa-chevron-left" style={{ paddingRight: '3px' }} />
              Back
            </BackButton>
            <Like count={post.likes} postID={post.id} />
          </Sidebar>
          <Content>
            <Title>{post.title}</Title>
            <Date>{post.dateString.substring(0, post.dateString.indexOf(","))}</Date>
            <BlogStyle ref={contentRef} dangerouslySetInnerHTML={{ __html: post.content }} />
          </Content>
        </BlogWrapper>
      </Section>
    </Layout>
  )
}