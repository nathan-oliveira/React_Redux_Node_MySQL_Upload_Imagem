import React from 'react'
import { Link } from "react-router-dom";
import './menu.css'

export default props => (
  <div className="header">
    <div className="content">
      <Link to="/"><h2 className="logo">Nathan</h2></Link>
      <input type="checkbox" id="chk" />
      <label className="show-menu-btn">
        <i className="fas fa-ellipsis-h"></i>
      </label>
      <ul className="menu">
        <Link to="/cadastrar">Cadastrar</Link>
        <label className="hide-menu-btn">
          <i className="fas fa-times"></i>
        </label>
      </ul>
    </div>
  </div>
)
