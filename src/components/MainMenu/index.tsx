import { Nav, Navbar, Container } from 'react-bootstrap';

const MainMenu = () => (
  <Navbar>
    <Container>
      <Navbar.Brand href="/">Mi tiendita</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="main-menu">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MainMenu;