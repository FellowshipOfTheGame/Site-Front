import PropTypes from "prop-types";
import Parser from "rss-parser";
import Podcast from "../components/pages/Podcast/Index";

export default function Page({ response }) {
  return <Podcast feed={response} />;
}

Page.propTypes = {
  response: PropTypes.object
};

export async function getStaticProps() {
  let parser = new Parser();
  let response = await parser.parseURL("https://anchor.fm/s/195cb2dc/podcast/rss");

  return {
    props: {
      response
    }
  };
}
