import React, { useEffect, useState } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import Like from '../components/blog/like';
import BlogContent from '../components/blog/blogContent';
import EditorPopup from '../components/blog/editorPopup';
import Axios from 'axios';
import { getApiUrl } from '../scripts/util';
import { Spinner } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";

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

const Sidebar = styled.div`
  background-color: ${props => props.theme.bg};
  height: 300px;
  position: sticky;
  top: 60px;
  align-self: start;
  text-align: left;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  padding: 0px 40px;
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
          <Sidebar>
            <BackButton to="/blog">
              <i className="fas fa-chevron-left" style={{ paddingRight: '3px' }} />
              Back
            </BackButton>
            <Like count={post.likes} postID={post.id} />
          </Sidebar>
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