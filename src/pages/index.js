import React from "react"
import Layout from "../components/Layout"
import HomeBanner from "../components/HomeBanner"
import ExpSection from "../components/ExpSection"
import ProjectSection from "../components/ProjectSection"
import SEO from "../components/SEO"
import { projects } from "../constants/projects"

export default ({ data }) => {
  // const {
  //   allStrapiProjects: { nodes: projects },
  // } = data

  return (
    <Layout>
      <SEO title="Home" description="Home page of this website" />
      <HomeBanner />
      <ExpSection />
      <ProjectSection projects={projects.filter(p => p.featured)} showLink />
    </Layout>
  )
}

// export const query = graphql`
//   {
//     allStrapiProjects(filter: { featured: { eq: true } }) {
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

export const query = {}
