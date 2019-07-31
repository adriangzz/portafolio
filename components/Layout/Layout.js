import Header from './Header';
// import Footer from './Footer';
import Head from 'next/head';
import '../../static/main.scss';

const Layout = props => (
  <div>
    <Head>
      <title key="title">aadrian - portafolio</title>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    {props.children}
    {/* <Footer /> */}
  </div>
);

export default Layout;
