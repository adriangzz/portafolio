import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = (props) => (
  <div>
    <Head>
      <title key="title">aadrian - portafolio</title>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="aadrian - front end developer" />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="/static/slick.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
    <Header available={props.available} />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
