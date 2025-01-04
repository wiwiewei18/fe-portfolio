import React from "react"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import brushImg from "../assets/brush-line.png"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const About = ({ data }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  // const {
  //   allStrapiAbout: { nodes },
  // } = data
  // const { title, stack, image, info } = nodes[0]

  const title = "About Me"
  const stackBE = [
    {
      id: "1",
      title: "Nest.js",
    },
    {
      id: "2",
      title: "Express",
    },
    {
      id: "3",
      title: "Microservices",
    },
    {
      id: "4",
      title: "Databases",
    },
    {
      id: "5",
      title: "Unit Testing & Integration Testing",
    },
    {
      id: "6",
      title: "Docker",
    },
    {
      id: "7",
      title: "Design Pattern",
    },
    {
      id: "8",
      title: "Git",
    },
  ]
  const stackAI = [
    {
      id: "1",
      title: "Data Science",
    },
    {
      id: "2",
      title: "Data Visualization",
    },
    {
      id: "3",
      title: "Machine Learning",
    },
    {
      id: "4",
      title: "Deep Learning",
    },
    {
      id: "5",
      title: "Computer Vision",
    },
    {
      id: "6",
      title: "Transfer Learning",
    },
    {
      id: "7",
      title: "LangChain",
    },
  ]

  const info = `
  Wiwie Sanjaya is a backend developer with over 4 years of experience in server-side logic, performance optimization, and system integration. He is proficient in JavaScript, TypeScript, and Python, with expertise in frameworks like Node.js and Express.js. Wiwie also has experience with databases (MongoDB, MySQL, Redis), architectural patterns (MVC, DDD), and testing tools (Jest, Supertest). While his primary focus is backend development, he has also pursued online courses in AI and Machine Learning using tools like Pandas, NumPy, and PyTorch to expand his skill set. Dedicated to building clean, scalable applications, Wiwie follows best practices and stays current with latest technologies.
  `

  return (
    <Layout active="about">
      <SEO title="About" description="About page of this website" />
      <PageBanner en="About" jp="私につて" />
      <div className="about-section d-flex align-items-center py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <Image
                fluid={fluid}
                className="img-fluid"
                alt="my profile pricture"
              />
            </div>
            <div className="col-12 col-md-6">
              <h2>{title}</h2>
              <div className="img mt-3 mb-2">
                <img src={brushImg} className="img-fluid" alt="brush line" />
              </div>
              <p className="text-justify">{info}</p>
              <strong className="d-block">Backend Skill Set</strong>
              {stackBE.map(item => {
                return (
                  <span key={item.id} className="stack">
                    {item.title}
                  </span>
                )
              })}
              <strong className="d-block mt-4">
                Artificial Intelligence Skill Set
              </strong>
              {stackAI.map(item => {
                return (
                  <span key={item.id} className="stack">
                    {item.title}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const query = graphql`
  {
    file(relativePath: { eq: "wiwie.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// export const query = graphql`
//   {
//     allStrapiAbout {
//       nodes {
//         stack {
//           id
//           title
//         }
//         title
//         info
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default About
