import React from "react"
import image from "../assets/circle.png"
import { Link } from "gatsby"
import { AiOutlineCheck } from "react-icons/ai"
import { jobs } from "../constants/jobs.js"

// const query = graphql`
//   {
//     allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
//       nodes {
//         strapiId
//         company
//         date
//         position
//         desc {
//           id
//           name
//         }
//       }
//     }
//   }
// `

const ExpSection = () => {
  // const data = useStaticQuery(query)
  // const {
  //   allStrapiJobs: { nodes: jobs },
  // } = data
  const [value, setValue] = React.useState(0)
  // const { company, position, date, desc } = jobs[value]

  const { company, position, date, desc } = jobs[value]

  return (
    <div className="exp-section bg-light py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-4 order-md-2 banner">
            <img src={image} className="img-fluid" alt="circle brush" />
            <div className="center">
              <h2>Experiences</h2>
            </div>
            <div className="center">
              <h2>経験</h2>
            </div>
          </div>
          <div className="col-md-8 mt-5 order-md-1">
            <div className="row">
              <div className="col-sm-4">
                <ul className="side-links">
                  {jobs.map((job, index) => {
                    return (
                      <li
                        className={`d-flex align-items-bottom ${
                          index === value ? "active" : ""
                        }`}
                        key={job.strapiId}
                      >
                        <button onClick={() => setValue(index)}>
                          {job.company}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="col-sm-8">
                <h3>{position}</h3>
                <h5>{company}</h5>
                <p>{date}</p>
                <ul>
                  {desc.map(item => {
                    return (
                      <li key={item.id}>
                        <AiOutlineCheck className="mr-2" />
                        <span>{item.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <Link to="/about/" className="btn btn-primary">
            see more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ExpSection
