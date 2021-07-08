import React from 'react';
import styled from 'styled-components';
import Like from './like';
import { Link } from "gatsby"

const Wrapper = styled.div`
  min-width: 300px;
  width: 60vw;
  max-width: 600px;
  border-radius: 10px;
  background-color: ${props => props.theme.bg};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.45);
  text-align: left;
  padding: 20px;
  margin: 10px;
  position: relative;
`;

const PostDate = styled.p`
  color: ${props => props.theme.textLight};
  font-size: 12px;
  margin-bottom: 5px;
`;

const PostLink = styled(Link)`
  color: ${props => props.theme.accent};
  width: fit-content;

  :hover {
    color: ${props => props.theme.accentHover};
  }
`;

const BlogPostLink = ({ post }) => {
  const date = post.dateString;
  return (
    <Wrapper>
      <PostDate>Posted {date.substring(0, date.indexOf(","))}</PostDate>
      <PostLink to={`/blog/${post.slug}/`}>
        <h4>{post.title}</h4>
      </PostLink>
      <p>{post.summary}</p>
      <Like count={post.likes} postID={post.id} />
    </Wrapper>
  );
};

export default BlogPostLink;