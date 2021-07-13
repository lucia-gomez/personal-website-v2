import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { getApiUrl } from '../../scripts/util';

const Trash = styled.i.attrs(_ => ({
  className: 'fas fa-trash'
}))`
  color: ${props => props.theme.accent};
  padding-right: 3px;
  cursor: pointer;
`;

const Delete = ({ postID, callback }) => {
  const handleClick = () => {
    Axios.delete(`${getApiUrl()}/api/delete/${postID}`);
    if (callback !== undefined) callback();
  }

  return (
    <Trash onClick={handleClick} />
  );
}

export default Delete