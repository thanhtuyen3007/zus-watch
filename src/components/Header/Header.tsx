import clsx from "clsx";
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";

import styles from "./Header.module.scss";
import { ReactElement } from "react";
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

const Header = (): ReactElement => {
  return (
    <Container fluid>
      <Navbar expand="lg" className={clsx(styles.wrapper)}>
        <Container>
          <Navbar.Brand>
            <Link className={clsx(styles.logo)} to={"/"}>
              zus
            </Link>
          </Navbar.Brand>
          <NavbarToggle
            className="border-0"
            children={
              <FontAwesomeIcon className={clsx(styles.icon)} icon={faBars} />
            }
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navLinkList.map((navItem: NavLinkType, index: number) => (
                <div className={clsx(styles.navItem)} key={index}>
                  <Link
                    className={clsx(styles.navItemLink, "py-5")}
                    to={navItem.path}
                  >
                    {navItem.title}
                  </Link>
                </div>
              ))}
            </Nav>
          </Navbar.Collapse>
          <Nav.Item>
            <Link to={"/cart"}>
              <FontAwesomeIcon
                className={clsx(styles.icon)}
                icon={faBagShopping}
              />
            </Link>
          </Nav.Item>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
