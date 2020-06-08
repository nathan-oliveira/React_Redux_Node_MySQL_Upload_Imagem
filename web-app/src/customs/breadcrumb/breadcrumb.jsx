import React from 'react'
import './breadcrumb.css'

const ProdutoListar = props => {
  return (
    <nav className="bread" aria-label="breadcrumb">
      <ol className="breadcrumb btn-sm">
        <li className="breadcrumb-item"><a href="/">{props.base}</a></li>
        <li className="breadcrumb-item active" aria-current="page">{props.location}</li>
      </ol>
    </nav>
  )
}

export default ProdutoListar