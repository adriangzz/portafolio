import React from "react";
import Git from "../../static/img/gitW.png";

const Footer = () => (
  <footer>
    <a href="#hero" className="logo">
      aadrian
    </a>
    <a
      href="https://github.com/adriangzz"
      className="git"
      title="View Github Profile"
    >
      <img src={Git} alt="Git profile" />
    </a>
  </footer>
);

export default Footer;
