import React from "react"
import { Helmet } from "react-helmet"

// const query = graphql`
//   {
//     site {
//       siteMetadata {
//         author
//         siteDesc: description
//         image
//         siteUrl
//         siteTitle: title
//         twitterUsername
//       }
//     }
//   }
// `

const SEO = ({ title, description }) => {
  // const { site } = useStaticQuery(query)
  // const {
  //   siteDesc,
  //   siteTitle,
  //   siteUrl,
  //   image,
  //   twitterUsername,
  // } = site.siteMetadata

  const siteDesc = "Wiwie Sanjaya Portfolio Site"
  const siteTitle = "Wiwie Sanjaya Portfolio"
  const siteUrl = "https://testing-strapi-gatsby-build.netlify.app"
  const image = "/twitter-img.png"
  const twitterUsername = "@wiwiesanjaya"

  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
