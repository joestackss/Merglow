import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./TheNavbar.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Home/Homepage";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar
          bg="light"
          expand="lg"
          className={`${classes.navbar} fixed-top`}
          data-aos="fade-down"
          data-aos-easing="ease-out"
          data-aos-duration="2000"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                alt=""
                src="merglow-logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/shop">
                  Shop
                </Nav.Link>
                <Nav.Link as={Link} to="/science">
                  Science
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </Nav>
              <Button variant="outline-success">Login</Button>
              <Button variant="outline-success">Sign Up</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/about" element={<Shop />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
