import React from "react";

const Header = (props) => (
  <header>
    <a href="#hero" className="logo">
      aadrian
    </a>
    <div className="headerRow">
      <a
        href="https://github.com/adriangzz"
        className="git"
        title="View Github Profile"
      >
        <img src="/public/static/img/git.png" alt="Git profile" />
      </a>
      <a href="mailto:adriangonzalezmontemayor@gmail.com" title="Send mail">
        <p>
          Available for contract: <b>{props.available}</b>
        </p>
      </a>
    </div>
  </header>
);

export default Header;
