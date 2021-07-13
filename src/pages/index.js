import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import HomeBanner from "../components/HomeBanner"
import ExpSection from "../components/ExpSection"
import ProjectSection from "../components/ProjectSection"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="Home page of this website" />
      <HomeBanner />
      <ExpSection />
      <ProjectSection projects={projects} showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
