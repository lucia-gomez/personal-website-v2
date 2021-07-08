import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"
import Layout from "../components/layout";
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";
import BlogPost from '../components/blogPostItem';
import Axios from 'axios';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PostLink = styled(Link)`
  color: unset;
  width: fit-content;
  margin: 10px;

  :hover {
    color: unset;
    text-decoration: none;
  }
`;

export default function BlogHomePage({ pageContext: { posts } }) {
  useEffect(() => {
    // TODO replace with prod client url
    const url = process.env.NODE_ENV === 'development' ? "http://localhost:8000" : 'http://localhost:8000';
    Axios.post(url + '/__refresh');
  }, [])

  return (
    <Layout>
      <Section id="archive" index={0}>
        {SectionTitle("Blog")}
        <Posts>
          {posts !== undefined ? posts.reverse().map((post, idx) =>
            <PostLink to={`/blog/${post.slug}/`} key={idx}>
              <BlogPost date={post.dateString} title={post.title} summary={post.summary} />
            </PostLink>
          ) : null}
        </Posts>
      </Section>
    </Layout>
  );
}