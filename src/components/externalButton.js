import React from 'react';
import styled from "styled-components"
import Link from '../components/link'

export const IconLink = styled(Link)`
  color: ${props => props.theme.text};
  padding-left: 8px;
  display: inline;
`;

const ExternalLink = styled(IconLink)`
  i {
    font-size: 26px;
  }
`;

export default function ExternalButton(link) {
  return (
    <ExternalLink href={link ?? ''} key={link}>
      <i className="material-icons">launch</i>
    </ExternalLink >
  );
}