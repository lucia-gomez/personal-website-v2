import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const Heart = styled.i`
  color: ${props => props.theme.accent};
  padding-right: 3px;
`;

const Like = ({ postID, count }) => {
  const [isLiked, setLiked] = useState(false);

  const handleClick = () => {
    if (!isLiked) {
      Axios.post('http://localhost:3001/api/like', { id: postID });
    } else {
      Axios.post('http://localhost:3001/api/unlike', { id: postID });
    }
    setLiked(!isLiked);
  }

  return (
    <Row onClick={handleClick}>
      <Heart className={isLiked ? 'fas fa-heart' : 'far fa-heart'} />
      <p style={{ margin: '0px' }}>{isLiked ? count + 1 : count}</p>
    </Row>
  );
}

export default Like