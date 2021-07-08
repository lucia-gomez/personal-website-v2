import React from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";
import { Link } from "gatsby"
import Like from '../components/blog/like';

const BlogWrapper = styled.div`
  padding: 0px 30px;
`;

export default function BlogPostPage({ pageContext: { post } }) {
  return (
    <Layout>
      <Section id="archive" index={0}>
        <BlogWrapper>
          <Link to="/blog">Back</Link>
          {SectionTitle(post.title)}
          <Like count={post.likes} postID={post.id} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </BlogWrapper>
      </Section>
    </Layout>
  )
}