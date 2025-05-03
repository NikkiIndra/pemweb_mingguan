import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from "./Pages/Profile"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import App from "./App"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from "react-bootstrap"


const Approuter = () => {
    return (
        <BrowserRouter>
            {/* <Navbar /> */}
            <Navbar className="me-auto">
            <Container>
                            <nav>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
                                <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                                <Nav.Link as={Link} to="/About">About</Nav.Link>
                            </nav>
                        </Container>
            </Navbar>

                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/About" element={<About />} />-
                </Routes>
        </BrowserRouter>
    )
}
export default Approuter