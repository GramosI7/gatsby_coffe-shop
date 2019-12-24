import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="About Us"
      styleClass="about-background"
    ></BackgroundSection>
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "coffee-bg-about.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default About
