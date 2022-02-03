import { Link, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const SecondPage: React.FC<PageProps> = ({ path }) => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2: "{path}"</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
