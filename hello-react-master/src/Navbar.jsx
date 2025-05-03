import { Link, NavLink, Navbar, Nav, Container } from "react-router-dom"

const NAvbars = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
                    <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/About">About</Nav.Link>
                </nav>
            </Container>
        </Navbar>

    )
}