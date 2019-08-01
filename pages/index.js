import React from 'react';
import Layout from '../components/Layout/Layout';

import Link from 'next/link';
import Fentexhaus from '../static/img/fentexhaus.png';
import FentexhausW from '../static/img/web.png';
import Patria from '../static/img/patria.png';
import PatriaW from '../static/img/web2.png';

const index = () => (
  <Layout>
    <section className="hero">
      <h1>
        <b>Hey, I'm Adrian!</b>
      </h1>
      <h3>
        I'm a front-end developer.
        <br />I love writing beautiful code.
        <br /> My portfolio consists of a varaity of projects including:
        <br />
        e-commerce solutions, business portfolios and management systems.
      </h3>
      <h3>My knowledge involves around react, php, and liquid.</h3>
      <h3>Below you can find some of my work.</h3>
    </section>
    <section className="work">
      <div className="workContainer">
        <article className="workSingle">
          <div className="workInfo">
            <h2>
              <b>FentexHaus</b>
            </h2>
            <h3>
              React + Next.js
              <br />
              Prismic for headless cms{' '}
            </h3>
          </div>
          <Link href="https://fentexhaus.mx">
            <a to="Go to fentexhaus">
              <div className="workDevices">
                <div className="workLaptop">
                  <img
                    className="workPlaceholderLaptop"
                    src={FentexhausW}
                    alt="Fentexhaus"
                  />{' '}
                </div>
                <div className="workMobile">
                  <img
                    className="workPlaceholder"
                    src={Fentexhaus}
                    alt="Fentexhaus"
                  />
                </div>
              </div>
            </a>
          </Link>
        </article>
        <article className="workSingle">
          <div className="workInfo">
            <h2>
              <b>Patria</b>
            </h2>
            <h3>Wordpress</h3>
          </div>
          <Link href="https://fentexhaus.mx">
            <a to="Go to fentexhaus">
              <div className="workDevices">
                <div className="workLaptop">
                  <img
                    className="workPlaceholderLaptop"
                    src={PatriaW}
                    alt="Patria"
                  />{' '}
                </div>
                <div className="workMobile">
                  <img className="workPlaceholder" src={Patria} alt="Patria" />
                </div>
              </div>
            </a>
          </Link>
        </article>
      </div>
    </section>
  </Layout>
);

export default index;
