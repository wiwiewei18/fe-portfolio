import React from "react"
import SocialLinks from "../constants/socialLinks"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

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

const HomeBanner = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <div className="home-banner bg-red-paint d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 d-none d-md-block">
            <Image
              fluid={fluid}
              className="hero-img"
              alt="my profile picture"
            />
          </div>
          <div className="col-12 col-md-6">
            <h1>Wiwie Sanjaya</h1>
            <h4>
              4 Years of Expertise in Scalable Application Development | AI
              Enthusiast
            </h4>
            <Link type="button" to="/contact/" className="btn btn-primary my-3">
              Contact Me
            </Link>
            <br />
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
