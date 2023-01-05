import { Nav, NavItem, NavLink } from 'reactstrap';
import { BsList } from 'react-icons/bs';
import '../css/Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const currentPage = window.location.pathname

    function home() {
        if (currentPage !== '/') {
            navigate('/')
            // window.location.reload()
        }
    }

    function about() {
        if (currentPage !== '/about') {
            navigate('/about')
            // window.location.reload()
        }
    }

    function contact() {
        if (currentPage !== '/contact') {
            navigate('/contact')
            // window.location.reload()
        }
    }

    return (
        <Nav vertical>
            <div id="navbar">
                <NavItem className="navIcon">
                    <BsList id="icon" />
                </NavItem>
                <div id="navLinks">
                    <NavItem className="navItem">
                        <NavLink className="navText" onClick={home}>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem className="navItem">
                        <NavLink className="navText" onClick={about}>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem className="navItem">
                        <NavLink className="navText" onClick={contact}>
                            Contact
                        </NavLink>
                    </NavItem>
                </div>
            </div>
        </Nav>
    )
}