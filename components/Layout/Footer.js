import React from 'react';
import Link from 'next/link';
import Git from '../../static/img/git.png';

const Footer = () => (
  <footer>
    <a href="#hero" className="logo">
      aadrian
    </a>
    <Link href="https://github.com/adriangzz">
      <a className="git" title="View Github Profile">
        <img src={Git} alt="Git profile" />
      </a>
    </Link>
  </footer>
);

export default Footer;
