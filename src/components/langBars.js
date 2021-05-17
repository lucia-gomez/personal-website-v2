import React from "react"
import styled from "styled-components"
import { ProgressBar } from 'react-bootstrap'

const Wrapper = styled.div`
  padding-bottom: 10px;
  padding-right: 10px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Progress = styled(ProgressBar)`
  background-color: ${props => props.theme.medium};
  margin-top: 1rem;

  .progress-bar {
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.textInv};
    text-align: left;
    padding-left: 5px;
    box-shadow: 0 3px 10px 0px rgba(0,0,0,0.5);
  }

  .progress-label {
    float: left;
    line-height: 15px;
    margin-right: 1em;
    text-align: right;
    width: 70px;
  }
`;

const LangBars = () => {
  const bars = [
    { name: "Python", progress: "95", }, { name: "Java", progress: "95", },
    { name: "OCaml", progress: "80", }, { name: "HTML/CSS", progress: "70", },
    { name: "Javascript/React", progress: "70", }, { name: "PHP/Hack", progress: "50", },
  ];

  return (
    <Wrapper>
      {bars.map((bar, key) => (
        <Progress now={bar.progress} label={bar.name} key={key} />
      ))}
    </Wrapper>
  );
}

export default LangBars