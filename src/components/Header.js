import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondery pointing menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/search" className="item">
        search
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;
