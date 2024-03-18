import React from "react";
import Logo from "./assets/logo-site.png";
import Image from "next/image";
import Link from "next/link";
import Menu from "./components/Menu";
const links = ["Products & Solutions", "About Us", "Resources", "Contact Us"];
const Header = () => {
  return (
    <div className="header-layout">
      <div className="wrap-header layout-site">
        <div className="header-content">
          <div className="logo-site">
            <Link href="/">
              <Image src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="header-site-right">
            <Menu />
            <div className="search-header"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
