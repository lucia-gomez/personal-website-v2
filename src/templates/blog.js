import React from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";
import BlogPostLink from '../components/blog/blogPostItem';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function BlogHomePage({ pageContext: { posts } }) {
  return (
    <Layout>
      <Section id="archive" index={0}>
        {SectionTitle("Blog")}
        <Posts>
          {posts !== undefined ? posts.map((post, idx) =>
            <BlogPostLink post={post} key={idx} />
          ) : null}
        </Posts>
      </Section>
    </Layout>
  );
}