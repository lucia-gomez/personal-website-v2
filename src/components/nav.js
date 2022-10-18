import React from 'react';
import styled from "styled-components";
import { Navbar, Nav } from 'react-bootstrap'
import Scrollspy from 'react-scrollspy'
import DarkModeSwitch from "../components/darkModeSwitch"
import { useAuth0 } from "@auth0/auth0-react";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Doc from '../assets/resume.pdf';

const NavWrapper = styled(Navbar)`
  background-color: #6A1B9A;

  .navbar-nav {
    flex-wrap: wrap;

    @media only screen and (max-width: 576px) {
      flex-direction: row;
    }
  }
`;

const ExtraNav = styled(Nav)`
  .nav-link {
    padding-right: 5px;
  }
`;

const NavLink = styled(Nav.Link).attrs(_ => ({
  className: "nav-link"
}))`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  width: max-content;

  .active {
    background-color: ${props => props.theme.accent};
    border: none;
    color: ${props => props.theme.textInv};
  }

  .extra {
    padding-right: 5px;
  }
`;

const LogoutButton = styled.a.attrs(_ => ({
  className: 'btn'
}))`
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.text};

  :hover {
    color: ${props => props.theme.accentHover};
  }
`;

const NavItem = styled(Nav.Item)`
  @media only screen and (max-width: 576px) {
    :not(:last-child) { 
      padding-right: 5px;
      display: flex;
      align-items: center;

      :after {
        content: '|';
        padding-left: 5px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

const CustomNav = props => {
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const sections = [
    { name: "Home", link: "/" }, { name: "About", link: "/#about" },
    { name: "Portfolio", link: "/archive" },
    { name: "Experience", link: "/#experience" },
    { name: "Blog", link: "/blog" },
    ...(isAuthenticated ? [{ name: "Admin", link: "/admin" }] : []),
    { name: "Art", link: "/art" },
    { name: "Resume", link: Doc, target: "_blank" },
  ];

  const icons = [
    {
      icon: <FaGithub size='20px' />,
      link: "https://github.com/lucia-gomez",
    },
    {
      icon: <FaLinkedin size='20px' />,
      link: "https://www.linkedin.com/in/lucia-g-22115110b/",
    }
  ];

  return (
    <NavWrapper id="main-navbar" className="navbar navbar-dark" expand="sm" fixed="top" collapseOnSelect>
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <Navbar.Collapse id="navbarCollapse">
        <Scrollspy componentTag='div' defaultActiveKey="./#home"
          className="navbar-nav mr-auto" items={['home', 'about', 'portfolio', 'experience']}
          currentClassName='isCurrent'>
          {sections.map((section, key) => (
            <NavItem as="li" key={key}>
              <NavLink as="a" href={section.link} target={section.target ?? null} >{section.name}</NavLink>
            </NavItem>
          ))}
        </Scrollspy>
        <ExtraNav>
          {icons.map((icon, key) => (
            <NavLink key={key} href={icon.link} target='_blank' rel='noopener noreferrer'>
              {icon.icon}
            </NavLink>
          ))}
          <DarkModeSwitch {...props} />
          {isAuthenticated ? <LogoutButton
            href="#logout"
            onClick={e => {
              logout({
                returnTo: window.location.origin,
              })
              e.preventDefault()
            }}
          >
            Log Out
          </LogoutButton> : null}
        </ExtraNav>
      </Navbar.Collapse>
    </NavWrapper >
  );
}

export default CustomNav