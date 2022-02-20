import React from 'react';
import styled from 'styled-components';
import Like from './like';
import { Link } from "react-router-dom";
import Delete from './delete';
import { useAuth0 } from "@auth0/auth0-react";
import BlogContent from './blogContent';

const Wrapper = styled.div`
  min-width: 300px;
  width: 60vw;
  max-width: 600px;
  border-radius: 10px;
  background-color: ${props => props.theme.bg};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.45);
  text-align: left;
  margin: 10px;
  position: relative;

  a {
    color: ${props => props.theme.text};
  }

  a:hover {
    color: ${props => props.theme.text};
    text-decoration: none;
  }
`;

const Date = styled.p`
  color: ${props => props.theme.textLight};
  font-size: 12px;
  margin-bottom: 5px;
`;

const Title = styled.h4`
  color: ${props => props.theme.accent};
  width: fit-content;

  :hover {
    color: ${props => props.theme.accentHover};
  }
`;

const Body = styled.div`
  padding: 20px;
`;

const Footer = styled.div`
  width: 100%;
  height: fit-content;
  border-top: 1px solid ${props => props.theme.textLight};
  padding: 5px;
  padding-left: 20px;
`;

const DeleteWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ContentPreview = styled(BlogContent)`
  max-height: 80px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;  
    height: 100%;
    width: 100%;
    content: "";
    background: linear-gradient(to top,
      rgba(36, 36, 36, 0) 0%, 
      rgba(255,255,255, 0) 70%
    );
    pointer-events: none;
  }
`;

const Divider = styled.div`
  height: 5px;
  width: 50px;
  border-radius: 20px;
  background-color: ${props => props.theme.accent};
  margin-bottom: 1rem;
`;

const BlogPostLink = ({ post }) => {
  const { isAuthenticated } = useAuth0();
  const date = post.dateString;

  return (
    <Wrapper>
      <Link to={`/blog/${post.slug}/`}>
        <Body>
          <Date>Posted {date.substring(0, date.indexOf(","))}</Date>
          <Title>{post.title}</Title>
          <p>{post.summary}</p>
          <Divider />
          <ContentPreview content={post.content} />
        </Body>
      </Link>
      <Footer>
        <Like count={post.likes} postID={post.id} />
      </Footer>
      {isAuthenticated ? <DeleteWrapper>
        <Delete postID={post.id} />
      </DeleteWrapper>
        : null}
    </Wrapper>
  );
};

export default BlogPostLink;