import React from "react"
import { ProgressBar } from 'react-bootstrap'

class LangBars extends React.Component {
  constructor(props) {
    super(props);
    this.bars = [
      { name: "Python", progress: "95", }, { name: "Java", progress: "95", },
      { name: "OCaml", progress: "80", }, { name: "HTML/CSS", progress: "70", },
      { name: "Javascript/React", progress: "70", }, { name: "PHP/Hack", progress: "50", },
    ];
  }

  render() {
    return (
      <div id='lang-bars-placeholder'>
        {this.bars.map((bar, key) => (
          <div className='lang-progress' key={key}>
            <ProgressBar now={bar.progress} label={bar.name} key={key} />
          </div>
        ))}
      </div>
    );
  }
}

export default LangBars