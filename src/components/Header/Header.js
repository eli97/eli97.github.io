import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
//import Container from 'react-bootstrap/Container';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  LinkedIn,
  GitHub,
  Telegram,
} from "@mui/icons-material";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, NavLink, withRouter } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
const Header = (props) => {
  const pathName = props?.location?.pathname;
  /*Question marks allow you to check if it exists first*/
  return (
    <Navbar expand="lg" className="header" sticky="top">
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        {/*Bootstrap has default padding and margins*/}
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          {/*Resume Link*/}
          <Nav.Link
            as={NavLink}
            to="/resume"
            className={pathName === "/" ? "header_link_active" : "header_link"}>
            Resume
          </Nav.Link>

          {/*Portfolio Link*/}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }>
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a
              href={resumeData.socials[key].link}
              target="_blank"
              rel="noreferrer">
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton text={"Hire Me"} icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
