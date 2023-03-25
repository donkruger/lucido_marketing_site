import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
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
          <Link href="/contact-us">
            <a>Contact us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
