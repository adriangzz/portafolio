import Prismic from "prismic-javascript";

const getProjects = async (params) => {
  try {
    const API = await Prismic.api(process.env.PRISMIC_API_URL);
    const response = await API.query(
      Prismic.Predicates.at("document.type", "project"),
      {
        orderings: "[my.project.date]",
        ...params,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

const getHomeInfo = async (params) => {
  try {
    const API = await Prismic.api(process.env.PRISMIC_API_URL);
    const response = await API.query(
      Prismic.Predicates.at("document.type", "home")
    );
    return response;
  } catch (error) {
    return error;
  }
};

export { getProjects, getHomeInfo };
