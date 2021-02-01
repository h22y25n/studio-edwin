import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="Interior Design & Construction">
            Interior Design & Construction
          </h2>
          <h3 id="STUDIO EDWIN">STUDIO EDWIN</h3>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Studio Edwin</figcaption>
          </figure>
          <h3 id="We design your place">We design your place</h3>
          <p>
            카페, 의류 매장 등 상업 공간부터 주거 공간까지 폭넓은 영역의
            인테리어 디자인과 시공을 진행하고 있습니다.
            <br />
            설계부터 시공, 감리까지 공사 전체를 디렉팅하며 디테일한 미팅과
            지속적인 소통으로 고객의 감성과 취향이 담긴 공간을 만들어 드립니다.
          </p>
          <p>
            인테리어는 무엇보다 공사가 끝난 뒤의 후처리 서비스도 매우 중요한
            일이라고 생각합니다.
            <br />
            오랜 노하우로 신뢰할 수 있는 시공팀과, 젊은 감각의 디자인으로
            <br />
            공간의 가치를 높일 수 있도록 함께 하겠습니다.
            <br />
            수많은 업체들 가운데 신의성실로 처음부터 끝까지 최선을 다함을 약속
            드립니다
          </p>
          <p>
            <em>Edwin, 강 희범</em>
          </p>
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
