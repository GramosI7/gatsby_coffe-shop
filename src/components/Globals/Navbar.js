import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/coffee.svg"
import { FaCartArrowDown } from "react-icons/fa"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [stateCss, setStateCss] = useState("collapse navbar-collapse")
  const [links, setLinks] = useState([
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/about",
      text: "about",
    },
  ])

  function navBarHandler() {
    if (open) {
      setOpen(false)
      setStateCss("collapse navbar-collapse")
    } else {
      setOpen(true)
      setStateCss("collapse navbar-collapse show")
    }
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} height="30" width="30" alt="logo" />
      </Link>
      <button className="navbar-toggler" type="button" onClick={navBarHandler}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className={stateCss}>
        <ul className="navbar-nav mx-auto">
          {links.map(link => (
            <li key={link.id} className="nav-item">
              <Link to={link.path} className="nav-link text-capitalize">
                {link.text}
              </Link>
            </li>
          ))}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
