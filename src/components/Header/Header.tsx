import clsx from "clsx"; // Import clsx for conditional class names
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons"; // Import icons from FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component
import { Link } from "react-router-dom"; // Import Link component from react-router-dom for navigation
import styles from "./Header.module.scss"; // Import styles from the module stylesheet
import { ReactElement, useState } from "react"; // Import React types and hooks

// Define the type for navigation links
type NavLinkType = {
  path: string;
  title: string;
};

// List of navigation links
const navLinkList: NavLinkType[] = [
  { path: "/collections", title: "collections" },
  { path: "/the-brand", title: "the brand" },
  { path: "/news", title: "news" },
  { path: "/contact", title: "contact" },
];

// Header component
const Header = (): ReactElement => {
  // State to manage the navigation menu's open/close status
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navigation menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.container)}>
        {/* Brand logo */}
        <div className={clsx(styles.brand)}>
          <Link className={clsx(styles.logo)} to={"/"}>
            zus
          </Link>
        </div>
        {/* Navigation toggle button */}
        <div className={clsx(styles.toggle)} onClick={toggleNav}>
          <FontAwesomeIcon className={clsx(styles.icon)} icon={faBars} />
        </div>
        {/* Collapsible navigation menu */}
        <div className={clsx(styles.collapse, { [styles.show]: isNavOpen })}>
          <nav className={clsx(styles.nav)}>
            {navLinkList.map((navItem: NavLinkType, index: number) => (
              <div className={clsx(styles.navItem)} key={index}>
                <Link className={clsx(styles.navItemLink)} to={navItem.path}>
                  {navItem.title}
                </Link>
              </div>
            ))}
          </nav>
        </div>
        {/* Shopping cart icon */}
        <div className={clsx(styles.cart)}>
          <Link to={"/cart"}>
            <FontAwesomeIcon className={clsx(styles.icon)} icon={faBagShopping} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
