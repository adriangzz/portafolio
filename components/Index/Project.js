import React from 'react';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';

const Project = props => (
  <article className="workSingle">
    <div className="workInfo">
      {RichText.render(props.project.data.title)}
      {RichText.render(props.project.data.description)}
    </div>
    <Link href={props.project.data.link.url}>
      <a title={`Go to ${props.project.data.title[0].text}`}>
        <div className="workDevices">
          <div className="workLaptop">
            <img
              className="workPlaceholderLaptop"
              src={props.project.data.desktop.url}
              alt={props.project.data.desktop.alt}
            />{' '}
          </div>
          <div className="workMobile">
            <img
              className="workPlaceholder"
              src={props.project.data.mobile.url}
              alt={props.project.data.mobile.alt}
            />
          </div>
        </div>
      </a>
    </Link>
  </article>
);

export default Project;
