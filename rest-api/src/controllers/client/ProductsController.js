'use strict'

const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const ProductsDAO = require('../../models/client/ProductsDAO');
const ResponseClass = require('../../models/ResponseClass');

exports.list = async (app, req, res, next) => {
  let resp = new ResponseClass();

  ProductsDAO.getAll(function(err, result) {
    if(err) {
      resp.error = true;
      resp.msg = 'Ocorreu um erro!';
    } else {
      resp.dados = result;
    }

    res.json(resp);
  })
}

exports.listById = async (app, req, res, next) => {
  let resp = new ResponseClass();

  ProductsDAO.getId(req.params.id, function(err, result) {
    if(err) {
      resp.error = true;
      resp.msg = 'Ocorreu um erro!';
    } else {
      resp.dados = result;
    }

    res.json(resp);
  })
}

exports.toSave = async (app, req, res, next) => {
  let resp = new ResponseClass();

  if(req.body.imagem != null) {
    let nome_img = `./public/uploads/${uuidv4()}`;
    let ext = req.body.imagem.split(';')[0].match(/jpeg|png|gif/)[0]

    let data = req.body.imagem.replace(/^data:image\/\w+;base64,/, "")
    let buf = new Buffer.from(data, 'base64')
    fs.writeFileSync(`${nome_img}.${ext}`, buf)

    req.body.caminho = `${nome_img}.${ext}`;

    ProductsDAO.toSave(req.body, function(err, result) {
      if(err) {
        resp.error = true;
        resp.msg = 'Ocorreu um erro!';
      } else {
        if(result.affectedRows > 0) {
          resp.msg = 'Cadastro realizado com sucesso!';
        } else {
          resp.error = true;
          resp.msg = 'Não foi possivel efetuar o cadastro!';
        }
      }
      res.json(resp);
    })

  } else {
    resp.error = true;
    resp.msg = 'Favor enviar uma imagem!';
    res.json(resp);
  }
}

exports.update = async (app, req, res, next) => {
  let resp = new ResponseClass();

  if(req.body.imagem != null) {
    let bitmap = new Buffer.from(req.body.imagem.imagem_base64, 'base64');

    let nome_img = `./public/uploads/${uuidv4()}-${req.body.imagem.nome_arquivo}`;

    fs.writeFileSync(nome_img, bitmap);
    req.body.caminho = nome_img;
  }

  ProductsDAO.update(req.body, function(err, result) {
    if(err) {
      resp.error = true;
      resp.msg = 'Ocorreu um erro!';
    } else {
      if(result.affectedRows > 0) {
        resp.msg = 'Cadastro atualizado com sucesso!';
      } else {
        resp.error = true;
        resp.msg = 'Não foi possivel atualizar o cadastro!';
      }
    }

    res.json(resp);
  })
}

exports.delete = async (app, req, res, next) => {
  let resp = new ResponseClass();

  ProductsDAO.delete(req.params.id, function(err, result) {
    if(err) {
      resp.error = true;
      resp.msg = 'Ocorreu um erro!';
    } else {
      if(result.affectedRows > 0) {
        resp.msg = 'Cadastro excluido com sucesso!'
      } else {
        resp.error = true;
        resp.msg = 'Não foi possivel excluir o cadastro!';
      }

      resp.dados = result
    }

    res.json(resp);
  })
}