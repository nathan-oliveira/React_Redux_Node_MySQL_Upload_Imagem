import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ProdutoForm.css'

import Breadcrumb from '../../customs/breadcrumb/breadcrumb'
import { saveProduct } from '../../redux/actions/ProdutoActions'

class ProdutoForm extends Component {
  constructor(props) {
    super(props)

    this.state = { id: '', titulo: '', imagem: null }
  }

  changeValues = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  Submit = e => {
    e.preventDefault()
    this.props.saveProduct(this.state)
    this.props.history.push('/')
  }

  onImageChange = e => {
    var reader = new FileReader()
    var file = e.target.files[0]
    let base64 = null

    reader.onload = function(upload) {
      base64 = upload.target.result
    }
    reader.readAsDataURL(file)

    setTimeout(() => {
      this.setState({
        imagem: base64
      })
    }, 200);
  }

  render() {
    const { titulo } = this.state

    return (
      <div className="content">
        <Breadcrumb base="Home" location="Cadastro de Produtos"/>

        <div className="wrapper">
          <form onSubmit={this.Submit}>
            <div className="row">
              <div className="cols-6">
                <div className="group-control">
                  <p>Produto</p>
                  <input className="input-control" type="text" name="titulo" id="titulo" placeholder="Nome do Produto" value={titulo} onChange={this.changeValues} />
                </div>
              </div>
              <div className="cols-6">
                <div className="group-control">
                  <p>Imagem</p>
                  <input className="input-control" type="file" name="imagem" id="imagem" placeholder="Imagem" onChange={(e) => this.onImageChange(e)} />
                </div>
              </div>
            </div>
            <div className="group-control form-button">
              <div className="row">
                <div className="cols-12">
                  <a href="/" type="submit" className="button-back">Voltar</a>
                  <input type="submit" className="button-submit" value="Salvar" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect('', {saveProduct})(ProdutoForm)