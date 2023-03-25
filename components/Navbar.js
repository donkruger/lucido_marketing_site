// components/Navbar.js

import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/how-it-works">
            <a>How it works</a>
          </Link>
        </li>
        <li>
          <Link href="/investors">
            <a>Investors</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
