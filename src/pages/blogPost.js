import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import BlogContent from '../components/blog/blogContent';
import EditorPopup from '../components/blog/editorPopup';
import Axios from 'axios';
import { getApiUrl } from '../scripts/util';
import { Spinner } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from '../components/blog/sidebar';

const BlogWrapper = styled.div`
  padding: 0px 30px;
  position: relative;
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);

  @media only screen and (max-width: 768px) {
    display: block;
    padding: 0px;
  }
`;

const Content = styled.div`
  padding: 0px 40px;
  text-align: left;
`;

const Title = styled.h2`
  color: ${props => props.theme.header};
  font-weight: 900;
  margin: 0px;
  padding-right: 10px;
`;

const Metadata = styled.div`
  color: ${props => props.theme.textLight};
`;

const EditWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export default function BlogPostPage() {
  const { isAuthenticated } = useAuth0();
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Axios.get(getApiUrl() + '/api/get/' + slug).then(res => {
      setPost(res.data[0] ?? null);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (post === null && !loading) {
    return <Redirect to="/404" />
  }

  return (
    <Layout>
      <Section id="blogPost" index={0}>
        {!loading ? <BlogWrapper>
          <Sidebar post={post} />
          <Content>
            <EditWrapper>
              <Title>{post.title}</Title>
              {isAuthenticated ? <EditorPopup post={post} /> : null}
            </EditWrapper>
            <Metadata>
              {post.dateString.substring(0, post.dateString.indexOf(","))}
              <p>Lucia Gomez</p>
            </Metadata>
            <BlogContent content={post.content} />
          </Content>
        </BlogWrapper>
          : <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        }
      </Section>
    </Layout>
  )
}