import React from 'react';
import { Link } from 'gatsby';
import { navbar, navContainer, navLinks, navLinkItem, navLinkText } from './layout.module.css';

const Navbar = () => {
  return (
    <nav className={navbar}>
      <div className={navContainer}>
        <Link to='/' className={navLinkText}>
          <h2>Jean-Marie Soom</h2>
        </Link>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to='/oeuvres' className={navLinkText}>Oeuvres</Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/expositions' className={navLinkText}>Expositions</Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/bio' className={navLinkText}>Bio</Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/contact' className={navLinkText}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
