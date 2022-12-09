import styled from 'styled-components';

const Wrapper = styled.div`
  width: 400px;
  margin-right: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    :hover {
      transform: scale(1.05);
      transition: transform 200ms;
    }
  }

  img {
    width: 100%;
    object-fit: contain;
    object-position: left bottom;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 576px) {
    width: 90%;
  }
`;

const ArtTitle = styled.p`
  margin: 0;
  color: ${props => props.theme.accent};
`;

const ArtDate = styled.p`
  color: ${props => props.theme.textLight};
  margin: 0;
`;

export default function ArtItem(props) {
  const {title, date, src, alt} = props;
  return <Wrapper className={props.className}>
    <img {...{src, alt}} />
    <ArtTitle>{title}</ArtTitle>
    <ArtDate>{date}</ArtDate>
  </Wrapper>
} 