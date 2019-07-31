import React from 'react';
import Layout from '../components/Layout/Layout';

import Link from 'next/link';

const index = () => (
  <Layout>
    <section className="hero">
      <h1>
        <b>Hey, I'm Adrian!</b>
      </h1>
      <h3>
        I'm a front-end developer.
        <br />I love writing beautiful code.
        <br /> My portafolio consists of a viriaity of projects including:
        <br />
        e-commerce solutions, buisness portafolios and managmenet systems.
      </h3>
      <h3>My knowladge involves around react, php, and liquid.</h3>
      <h3>Below you can find some of my work.</h3>
      <button>v</button>
    </section>
    <section className="work">
      <div className="workContainer">
        <article className="workSingle">
          <div className="workInfo">
            <h1>FentexHaus</h1>
          </div>
          <Link href="https://fentexhaus.mx">
            <a to="Go to fentexhaus">
              <div className="workMobile">
                <div className="workPlaceholder" />
              </div>
            </a>
          </Link>
        </article>
      </div>
    </section>
  </Layout>
);

export default index;
