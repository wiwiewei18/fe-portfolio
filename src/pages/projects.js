import React from "react"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import { graphql } from "gatsby"
import ProjectSection from "../components/ProjectSection"
import SEO from "../components/SEO"
import { projects } from "../constants/projects"

const ProjectsPage = ({ data }) => {
  // const {
  //   allStrapiProjects: { nodes: projects },
  // } = data

  return (
    <Layout active="projects">
      <SEO title="Projects" description="Projects page of this website" />
      <PageBanner en="Projects" jp="プロジェクト" />
      <ProjectSection projects={projects} />
    </Layout>
  )
}

// export const query = graphql`
//   {
//     allStrapiProjects {
//       nodes {
//         github
//         id
//         description
//         title
//         url
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         stack {
//           id
//           title
//         }
//       }
//     }
//   }
// `

export default ProjectsPage
