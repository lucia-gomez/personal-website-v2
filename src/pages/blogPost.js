import React, { useEffect, useState } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from "../components/layout";
import Section from "../components/section";
import Like from '../components/blog/like';
import BlogContent from '../components/blog/blogContent';
import Axios from 'axios';
import { getApiUrl } from '../scripts/util';
import { Spinner } from 'react-bootstrap';

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

export default function BlogPostPage() {
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
            <Title>{post.title}</Title>
            <Date>{post.dateString.substring(0, post.dateString.indexOf(","))}</Date>
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