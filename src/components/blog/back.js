import styled from "styled-components";
import { Link } from 'react-router-dom';

const BackButton = styled(Link)`
  color: ${props => props.theme.accent};
  margin: 5px;
  display: block;

  :hover {
    color: ${props => props.theme.accentHover};
    text-decoration: none;
  }
`;

const Back = ({ className, link }) => {
  return (
    <BackButton to={link} className={className}>
      <i className="fas fa-chevron-left" style={{ paddingRight: '3px' }} />
      Back
    </BackButton>
  );
}

export default Back