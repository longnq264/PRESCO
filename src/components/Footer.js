import Link from "next/link";
import React from "react";
import Image from "next/image";
import Background from "@/public/assets/background2.png";
import LogoFooter from "@/public/assets/logo-footer.png";
const Footer = () => {
  return (
    <footer className="footer-site">
      <div className="layout-footer">
        <div className="footer-top-menu">
          <Image
            className="background-footer"
            src={Background}
            alt="background"
          />
          <div className="content-site">
            <h1>subscribe</h1>
            <p>Want to stay up to date? Subscribe to our Newsletter!</p>
            <form className="send-mail">
              <input type="text" placeholder="Email*" />
              <input type="button" value="Subscribe" />
            </form>
          </div>
        </div>
        <div className="footer-middle-layout">
          <div className="wrap-footer-middle layout-site">
            <section>
              <div className="logo-footer">
                <Link href="/">
                  <Image src={LogoFooter} alt="logo-footer" />
                </Link>
              </div>
              <div className="list-social">
                <ul>
                  <li>
                    <Link href={"/facebook.com"}>facebook</Link>
                  </li>
                  <li>
                    <Link href={"/x.com"}>twitter</Link>
                  </li>
                  <li>
                    <Link href={"/instagram.com"}>instagram</Link>
                  </li>
                </ul>
              </div>
            </section>
            <section className="address">
              <div className="wrap-list-menu-footer">
                <h4>our address</h4>
                <ul>
                  <li>
                    Presco Radiator Caps Ltd. Unit D86, Blackpole Trading Estate
                    West, Worcester, England, WR3 8TJ
                  </li>
                  <li>
                    <Link href="#">Ph: +44 (0)1905 755656</Link>
                  </li>
                  <li>
                    <Link href="#">Ph: +44 (0)1905 755656</Link>
                  </li>
                  <li>
                    <Link href="#">Ph: +44 (0)1905 755656</Link>
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <div className="wrap-list-menu-footer">
                <h4>important links</h4>
                <ul>
                  <li>
                    <Link href="/">Packaging</Link>
                  </li>
                  <li>
                    <Link href="/">Packaging</Link>
                  </li>
                  <li>
                    <Link href="/">Packaging</Link>
                  </li>
                  <li>
                    <Link href="/">Packaging</Link>
                  </li>
                  <li>
                    <Link href="/">Packaging</Link>
                  </li>
                  <li>
                    <Link href="/">Packaging</Link>
                  </li>
                  <li>
                    <Link href="/">Packaging</Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className="footer-bottom-layout">
          <div className="layout-site">
            <p>
              Copyright © presco-radiator-caps.com 2010-2024. All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
