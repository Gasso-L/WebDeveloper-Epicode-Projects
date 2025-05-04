import InputSearch from "../inputSearch/InputSearch";
import { Button, Container, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Moon, Sun } from "lucide-react";
import Nav from "react-bootstrap/Nav";
import "./mynav.css";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const MyNav = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar expand="lg" className="nav-bkg py-4">
      <Container>
        <Navbar.Brand href="#home">EpiBooks!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
          </Nav>
          <Nav>
            <InputSearch className="align-self-end pt-3 pt-lg-0" />
            <Button
              onClick={toggleTheme}
              className="btn-theme align-self-end ms-0 ms-lg-4 pt-5 pt-lg-0"
              title={isDarkMode ? "Enable Light Mode" : "Enable Dark Mode"}
            >
              {isDarkMode ? <Moon /> : <Sun />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
