import React from 'react';
import styled from 'styled-components';
import Delete from './delete';

const Wrapper = styled.div`
  width: fit-content;
  border-radius: 10px;
  background-color: ${props => props.theme.bg};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.45);
  text-align: left;
  margin: 10px 10px 10px 0px;
  position: relative;

  a {
    color: ${props => props.theme.text};
  }

  a:hover {
    color: ${props => props.theme.text};
    text-decoration: none;
  }
`;

const Title = styled.h4`
  color: ${props => props.theme.accent};
  width: fit-content;
  cursor: pointer;

  :hover {
    color: ${props => props.theme.accentHover};
  }
`;

const Body = styled.div`
  padding: 20px;
`;

const DeleteWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const BlogDraftItem = ({ post, handleOpenDraft, handleDeleteDraft }) => {
  return (
    <Wrapper>
      <Body>
        <Title onClick={() => handleOpenDraft(post)}>{post.title}</Title>
        <p>{post.summary}</p>
      </Body>
      <DeleteWrapper>
        <Delete postID={post.id} callback={handleDeleteDraft} draft />
      </DeleteWrapper>
    </Wrapper>
  );
};

export default BlogDraftItem;