import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";
import BlogPostLink from '../components/blog/blogPostItem';
import Axios from 'axios';
import { getApiUrl } from '../scripts/util';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function BlogHomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get(getApiUrl() + "/api/get").then(res => {
      setPosts(res.data.reverse());
    })
  }, []);

  return (
    <Layout path="/">
      <Section id="archive" index={0}>
        {SectionTitle("Blog")}
        <Posts>
          {posts.map((post, idx) =>
            <BlogPostLink post={post} key={idx} />
          )}
        </Posts>
      </Section>
    </Layout>
  );
}