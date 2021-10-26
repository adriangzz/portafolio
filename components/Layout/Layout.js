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
        href="/public/static/slick.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="//db.onlinewebfonts.com/c/42c3607f840e222a23d6da4efe15a2e8?family=Quarto+Black"
        rel="stylesheet"
        type="text/css"
      />
    </Head>
    <Header available={props.available} />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
