import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './ProdutoList.css'

import Breadcrumb from '../../customs/breadcrumb/breadcrumb'
import { showProduct, deleteProduct } from '../../redux/actions/ProdutoActions'

class ProdutoList extends Component {
  componentDidMount() {
    this.props.showProduct()
  }

  deleteById(id) {
    this.props.deleteProduct(id)
  }

  renderProduct() {
    return this.props.produtos.map((p) => {
      return (
        <tr className="row100 body" key={p.id}>
          <td className="cell100 column1">{p.title}</td>
          <td className="cell100 column2">{p.img}</td>
          <td className="cell100 column5">
            <button onClick={() => this.deleteById(p.id)} type="submit" className="button-delete">
              <i className="fas fa-trash-alt"></i> Deletar
            </button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="content">
        <Breadcrumb base='Home' location='Listagem de Produtos'/>
        <div className="row">
          <div className="cols-12">
            <Link to="/cadastrar" className="button-blue"><i className="fas fa-plus"></i> Adicionar</Link>
          </div>
          <div className="wrap-table100 cols-12">
            <div className="table100 ver1 m-b-110">
              <div className="table100-head">
                <table>
                  <thead>
                    <tr className="row100 head">
                      <th className="cell100 column1">Produto</th>
                      <th className="cell100 column2">URL</th>
                      <th className="cell100 column5">Ações</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="table100-body js-pscroll">
                <table>
                  <tbody>
                    {this.renderProduct()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    produtos: state.produtos.list
  }
}

export default connect(mapStateToProps, {showProduct, deleteProduct})(ProdutoList)