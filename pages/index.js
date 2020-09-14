import { getProjects, getHomeInfo } from "../api/index";
import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Index/Hero";
import Work from "../components/Index/Work";

const index = props => (
  <Layout available={props.homeInfo.available}>
    <Hero
      title={props.homeInfo.title}
      description={props.homeInfo.description}
    />
    <Work projects={props.projects} />
  </Layout>
);

index.getInitialProps = async () => {
  const projectsData = await getProjects();
  const homeData = await getHomeInfo();
  return {
    projects: projectsData.results,
    homeInfo: homeData.results[0].data
  };
};

export default index;
