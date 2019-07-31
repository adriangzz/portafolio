import React from 'react';
import Link from 'next/link';

import Logo from '../../static/img/logo.png';
import Available from '../../static/img/available.png';
const Header = () => (
  <header>
    <a href="#hero" className="logo">
      aadrian
    </a>
    <div>
      <Link href="mailto:adriangonzalezmontemayor@gmail.com">
        <a to="Send mail">
          <p>
            Available for contract: <b>Available</b>
          </p>
        </a>
      </Link>
    </div>
  </header>
);

export default Header;
