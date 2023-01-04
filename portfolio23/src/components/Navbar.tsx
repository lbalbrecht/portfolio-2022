import { Nav, NavItem, NavLink } from 'reactstrap';
import '../css/Navbar.css';

export default function Navbar() {


    return (
        <Nav vertical>
            <NavItem>
                <NavLink href="#">
                    <p className="navText">Home</p>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                    <p className="navText">About</p>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                    <p className="navText">Contact</p>
                </NavLink>
            </NavItem>
        </Nav>
    )
}