import clsx from "clsx";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./Header.module.scss";
type NavLinkType = {
  path: string;
  title: string;
};
const navLinkList: NavLinkType[] = [
  { path: "/collections", title: "collections" },
  { path: "/thebrand", title: "the brand" },
  { path: "/news", title: "news" },
  { path: "/contact", title: "contact" },
];

const Header = () => {
  return (
    <Navbar expand="lg" className={clsx(styles.wrapper)}>
      <Container>
        <Navbar.Brand>
          <Link className={clsx(styles.logo)} to={"/"}>
            zus
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinkList.map((navItem: NavLinkType, index: number) => (
              <Nav.Item className={clsx(styles.navItem)} key={index}>
                <Link className={clsx(styles.navItemLink)} to={navItem.path}>
                  {navItem.title}
                </Link>
              </Nav.Item>
            ))}
            <Nav.Item>
              <Link to={"/cart"}>
                <FontAwesomeIcon icon={faBagShopping} />
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
