import React from "react";
import Nav from "~components/Nav";
import Link from "~components/Link";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.02 14.88">
            <line className="u-line" y1="13.93" x2="11.02" y2="13.93" />
            <polyline
              className="g-line"
              points="11 0.95 0.96 0.95 0.96 10.68 10.06 10.68 10.06 4.17 4.21 4.18 4.21 7.44 7.78 7.44"
            />
          </svg>
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
