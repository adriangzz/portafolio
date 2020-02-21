import React, { Component } from "react";
import Slider from "react-slick";

import Project from "./Project";

class Work extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true
    };
    return (
      <section className="work">
        <div className="workContainer">
          <Slider {...settings}>
            {this.props.projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}

export default Work;
