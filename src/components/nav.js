import React from "react"
import styled from "styled-components";
import { Navbar, Nav } from 'react-bootstrap'
import Scrollspy from 'react-scrollspy'
import DarkModeSwitch from "../components/darkModeSwitch"

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "typeface-roboto"
import Doc from '../assets/resume.pdf';

const NavLink = styled(Nav.Link).attrs(_ => ({
  className: "nav-link"
}))`
  background: none;
  border: none;
  color: ${props => props.theme.text};

  .active {
    background-color: ${props => props.theme.accent};
    border: none;
    color: ${props => props.theme.textInv};
  }
`;

class CustomNav extends React.Component {
  constructor(props) {
    super(props);
    this.sections = [
      { name: "Home", link: "/" }, { name: "About", link: "/#about" },
      { name: "Portfolio", link: "/#portfolio" },
      { name: "Resume", link: Doc, target: "_blank" },
    ];

    this.icons = [
      {
        icon: <FaGithub size='20px' />,
        link: "https://github.com/lucia-gomez",
      },
      {
        icon: <FaLinkedin size='20px' />,
        link: "https://www.linkedin.com/in/lucia-g-22115110b/",
      }
    ];
  }

  render() {
    return (
      <Navbar id="main-navbar" className="navbar navbar-dark" expand="sm" fixed="top" >
        <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse">
          <Scrollspy componentTag='div' defaultActiveKey="./#home"
            className="navbar-nav mr-auto" items={['home', 'about', 'portfolio', 'experience']}
            currentClassName='isCurrent'>
            {this.sections.map((section, key) => (
              <Nav.Item as="li" key={key}>
                <NavLink as="a" href={section.link} target={section.target ?? null} >{section.name}</NavLink>
              </Nav.Item>
            ))}
          </Scrollspy>
          <Nav>
            {this.icons.map((icon, key) => (
              <NavLink key={key} href={icon.link} target='_blank' rel='noopener noreferrer'>
                {icon.icon}
              </NavLink>
            ))}
            <DarkModeSwitch {...this.props} />
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    );
  }
}

export default CustomNav