import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";
import BlogPostLink from '../components/blog/blogPostItem';
import Axios from 'axios';
import { getApiUrl } from '../scripts/util';
import { Spinner } from 'react-bootstrap';

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function BlogHomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Axios.get(getApiUrl() + "/api/get").then(res => {
      setPosts(res.data.reverse());
      setLoading(false);
    })
  }, []);

  const content = posts.length === 0 ?
    <p>No posts found</p>
    : <Posts>
      {posts.map((post, idx) =>
        <BlogPostLink post={post} key={idx} />
      )}
    </Posts>

  return (
    <Layout>
      <Section id="blog" index={0}>
        {SectionTitle("Blog")}
        {loading ?
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          : content}
      </Section>
    </Layout>
  );
}