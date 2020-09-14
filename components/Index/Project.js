import React from "react";
import { RichText } from "prismic-reactjs";

const Project = props => (
  <article className="workSingle">
    <div className="workInfo">
      {RichText.render(props.project.data.title)}
      {RichText.render(props.project.data.description)}
    </div>
    <a
      href={props.project.data.link.url}
      title={`Go to ${props.project.data.title[0].text}`}
      aria-label={props.project.data.title[0].text}
    >
      <div className="workDevices">
        <div className="workLaptop">
          <img
            className="workPlaceholderLaptop"
            src={props.project.data.desktop.url}
            alt=""
          />{" "}
        </div>
        <div className="workMobile">
          <img
            className="workPlaceholder"
            src={props.project.data.mobile.url}
            alt=""
          />
        </div>
      </div>
    </a>
  </article>
);

export default Project;
