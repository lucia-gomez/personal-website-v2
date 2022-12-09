import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ArtItem from '../art/artItem';

const LinkWrapper = styled(Link)`
  :hover {
    color: unset;
    text-decoration: unset;
  }
`;

const ZineItemWrapper = styled(ArtItem)`
  width: 200px;

  img {
    height: 300px;
  }

  @media only screen and (max-width: 576px) {
    width: unset;
    img {
      width: 120px;
      height: 175px;
    }
  }
`;

export default function ZineItem({ zine }) {
  return (
    <LinkWrapper to={`/art/zine/${zine.slug}`}>
      <ZineItemWrapper 
        title={zine.title} 
        date={zine.date} 
        src={zine.pages[0]} 
        alt={`${zine.title} zine cover page`} 
      />
    </LinkWrapper>
  );
}