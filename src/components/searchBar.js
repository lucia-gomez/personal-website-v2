import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.text};
  border-radius: 20px;
  border: 2px solid ${props => props.theme.accent};
  padding: 5px 10px 5px 25px;

  :focus-visible {
    outline: none;
    border: 2px solid ${props => props.theme.accentHover};
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${props => props.theme.textLight};
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: ${props => props.theme.textLight};;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: ${props => props.theme.textLight};;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: ${props => props.theme.textLight};;
  }
`;

const Icon = styled.i`
  position: absolute;
  top: 25%;
  left: 8px;
  color: ${props => props.theme.accent};
  z-index: 1;
`;

const SearchBar = ({ callback }) => {
  const handleChange = e => {
    const query = e.target.value.trim();
    const keywords = query.split(",").map(x => x.trim()).filter(x => x.length > 0);
    callback(keywords);
  }

  return (
    <Container>
      <div style={{ position: 'relative' }}>
        <Icon className="fas fa-search" />
        <Input
          onChange={handleChange}
          placeholder="Ex: React, drink"
        />
      </div>
    </Container>
  );
}

export default SearchBar;