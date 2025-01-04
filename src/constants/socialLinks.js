import React from "react"
import { FaWhatsappSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/wiwie-sanjaya/",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/wiwiewei18",
  },
  {
    id: 3,
    icon: <FaWhatsappSquare className="social-icon"></FaWhatsappSquare>,
    url:
      "https://api.whatsapp.com/send?phone=62895337376606&text=Hello%20Wiwie%20Sanjaya",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id} className="social-link">
      <a href={link.url}>{link.icon}</a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
