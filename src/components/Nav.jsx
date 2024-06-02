import { Container, Navbar, Nav } from "react-bootstrap";
import Cart from "./Cart";
import "./style.css"

export default function NavComponent(){

    return <>
    <Navbar expand="lg" style={{backgroundColor: "none" }} >
      <Container className="navContainer" >
        <div className="nav1">
      <Navbar.Brand href="#home" style={{color: "black", fontWeight:"500"}} className="navBrand">
            <img
              alt=""
              src="https://aps-plants-website.netlify.app/assets/APSDark-BHi096m8.png"
              height="40"
              className="d-inline-block align-top"
              style={{marginRight: 10}}
            />
            Simply Natural
          </Navbar.Brand>

        </div>
        <div style={{display:"flex"}} className="nav2">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home" style={{color: "#fc5f5f", fontSize: 18}}>Home</Nav.Link>
            <Nav.Link className="navLink" href="#">About Us</Nav.Link>
            <Nav.Link className="navLink" href="#">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      <Cart/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
      </Container>
    </Navbar>
    </>
}

