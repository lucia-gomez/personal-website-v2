import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { getApiUrl } from '../../scripts/util';

const Trash = styled.i.attrs(_ => ({
  className: 'fas fa-trash'
}))`
  color: ${props => props.theme.accent};
  cursor: pointer;
`;

const Delete = ({ postID, callback, draft, className }) => {
  const handleClick = () => {
    Axios.delete(`${getApiUrl()}/api/${draft ? 'draft' : 'delete'}/${postID}`);
    if (callback !== undefined) callback(postID);
  }

  return (
    <Trash onClick={handleClick} className={className} />
  );
}

export default Delete