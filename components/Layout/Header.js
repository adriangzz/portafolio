import React from 'react';
import Link from 'next/link';

import Git from '../../static/img/git.png';

const Header = props => (
  <header>
    <a href="#hero" className="logo">
      aadrian
    </a>
    <div className="headerRow">
      <Link href="https://github.com/adriangzz">
        <a className="git" title="View Github Profile">
          <img src={Git} alt="Git profile" />
        </a>
      </Link>
      <Link href="mailto:adriangonzalezmontemayor@gmail.com">
        <a title="Send mail">
          <p>
            Available for contract: <b>{props.available}</b>
          </p>
        </a>
      </Link>
    </div>
  </header>
);

export default Header;
