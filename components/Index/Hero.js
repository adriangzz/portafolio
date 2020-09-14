import React from "react";
import { RichText } from "prismic-reactjs";

const Hero = props => (
  <section className="hero">
    {RichText.render(props.title)}
    {RichText.render(props.description)}
  </section>
);

export default Hero;
