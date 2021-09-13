import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import Style from "./navigation.module.scss"
import Logo from "../../assets/images/NavLogo.png"

export default function Navigation() {
  return (
    <nav className={Style.navigation}>
      <img src={Logo} alt="" />
      <ul>
        <li><Link to="/frontpage">Forside</Link></li>&nbsp;
        <li><Link to="">Boliger til salg</Link></li>&nbsp;
        <li><Link to="/login">Login</Link></li>&nbsp;
      </ul>
    </nav>
  )
}
