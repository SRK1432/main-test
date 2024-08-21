import React from "react";
import { Nav, NavDropdown, Container } from "react-bootstrap";
import "./MainHeader.css"; 

const MainHeader = () => {
  return (
    <header className="main-header">
      <Container className="header-container">
        <h2 className="header-title">MOVIESAK.com</h2>
        <Nav className="header-nav">
          <Nav.Item className="nav-item">
            <Nav.Link href="/" className="nav-link">HOME</Nav.Link>
          </Nav.Item>
          
          <Nav.Item className="nav-item">
            <NavDropdown title="MOVIES" id="movies-dropdown" className="nav-dropdown">
              <NavDropdown.Item href="/nowplaying" className="dropdown-item">Now Playing</NavDropdown.Item>
              <NavDropdown.Item href="/comingsoon" className="dropdown-item">Coming Soon</NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          
          <Nav.Item className="nav-item">
            <NavDropdown title="SINGLE MOVIES" id="single-movies-dropdown" className="nav-dropdown">
              <NavDropdown.Item href="/fullbanner" className="dropdown-item">Full width & banner</NavDropdown.Item>
              <NavDropdown.Item href="/fullnobanner" className="dropdown-item">Full width & no banner</NavDropdown.Item>
              <NavDropdown.Item href="/sidebanner" className="dropdown-item">Side & banner</NavDropdown.Item>
              <NavDropdown.Item href="/sidenobanner" className="dropdown-item">Side & no banner</NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          
          <Nav.Item className="nav-item">
            <NavDropdown title="SHOW TIME" id="showtime-dropdown" className="nav-dropdown">
              <NavDropdown.Item href="/dailylayout" className="dropdown-item">Daily showtime layout list</NavDropdown.Item>
              <NavDropdown.Item href="/dailyazax" className="dropdown-item">Daily showtime Azax</NavDropdown.Item>
              <NavDropdown.Item href="/weeklyazax" className="dropdown-item">Weekly showtime Azax</NavDropdown.Item>
              <NavDropdown.Item href="/weeklytable" className="dropdown-item">Weekly showtime Table</NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          
          <Nav.Item className="nav-item">
            <Nav.Link href="/toprated" className="nav-link">TOP RATED</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </header>
  );
};

export default MainHeader;
