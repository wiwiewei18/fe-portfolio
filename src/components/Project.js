import React from "react"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <div className="project-card mt-4 mb-4">
      {image ? (
        // <Image
        //   fluid={projectImage[id]}
        //   className="img-fluid"
        //   alt="project image"
        // />
        <img
          src={require(`../assets/${image}`)}
          className="img-fluid"
          alt="project image"
        />
      ) : (
        ""
      )}
      <div className="project-desc row justify-content-center">
        <div className="col-10 p-5">
          <p>0{index + 1}.</p>
          <h3>{title}</h3>
          <p className="text-justify mt-3 text-line-6">{description}</p>
          {stack.map(item => {
            return (
              <span key={item.id} className="stack">
                {item.title}
              </span>
            )
          })}
          <div className="icons">
            {github !== "-" ? (
              <span className="icon">
                <a href={github} className="link">
                  <FaGithubSquare />
                </a>
              </span>
            ) : (
              ""
            )}
            {url !== "-" ? (
              <span className="icon">
                <a href={url} className="link">
                  <FaShareSquare />
                </a>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {}

export default Project
