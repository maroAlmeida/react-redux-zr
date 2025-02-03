"use client";

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto">
        <ul className="flex space-x-4">
            <li>Aqui vai uma página com link</li>
          {/* <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;