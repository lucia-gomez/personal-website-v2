import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";
import BlogPostLink from '../components/blog/blogPostItem';
import Axios from 'axios';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function BlogHomePage({ pageContext: { posts } }) {
  useEffect(() => {
    const url = process.env.NODE_ENV === 'development' ? "http://localhost:8000" : 'https://lucia-gomez.netlify.app';
    Axios.post(url + '/__refresh');
  }, [])

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