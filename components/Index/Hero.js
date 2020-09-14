import React from "react";
import { RichText } from "prismic-reactjs";

const Hero = ({ title, description }) => (
  <section className="hero">
    {RichText.render(title)}
    {RichText.render(description)}
  </section>
);

export default Hero;
