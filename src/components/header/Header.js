import { Container, Navbar, Nav } from 'react-bootstrap'


const Header = () => {
  return (
    <div className='header-navbar'>
      <Navbar sticky='top' bg='success' variant='light'>
        <Container>
          <Nav className='nav-link'>
            <img src="https://cdn-icons-png.flaticon.com/128/1752/1752970.png" alt="succulent" />
            <Nav.Link href='/'>Projects </Nav.Link>
            <Nav.Link href='/aboutme'>About Me </Nav.Link>
            <Nav.Link href='/resume'>Resume </Nav.Link>
            <Nav.Link href='/contact'>Contact </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header