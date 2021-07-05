import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 5px 30px;
  p {
    text-align: left;
  }

  span {
    font-weight: 700;
    background-color: ${props => props.theme.accentLight};
    border-radius: 5px;
    padding: 0px 3px;
  }
`;

const Title = styled.h4`
  color: ${props => props.theme.header};
`;

const Subsection = props => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      {props.children}
    </Wrapper>
  )
}

export default Subsection;