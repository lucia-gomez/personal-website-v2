import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 300px;
  width: 60vw;
  max-width: 600px;
  border-radius: 10px;
  background-color: ${props => props.theme.bg};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.45);
  text-align: left;
  padding: 20px;
  position: relative;
`;

const PostTitle = styled.h4`
  color: ${props => props.theme.accent};
`;

const PostDate = styled.p`
  color: ${props => props.theme.textLight};
  font-size: 12px;
  margin-bottom: 5px;
`;

const BlogPostLink = ({ date, title, summary }) => {
  return (
    <Wrapper>
      <PostDate>Posted {date.substring(0, date.indexOf(","))}</PostDate>
      <PostTitle>{title}</PostTitle>
      <p>{summary}</p>
    </Wrapper>
  );
};

export default BlogPostLink;