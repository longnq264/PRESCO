import React from "react";
import Link from "next/link";
const Menu = () => {
  return (
    <nav className="nav-bar-menu">
      <ul>
        <li>
          <Link href="/product">Products & Solutions</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/resources">Resources</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
