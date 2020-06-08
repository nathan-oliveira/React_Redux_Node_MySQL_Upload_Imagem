'use strict'

const conn = require('../../../bin/keys');

module.exports = class ProductsDAO {
  static getAll(callback) {
    let sql = 'SELECT * FROM products';
    return conn.query(sql, callback)
  }

  static getId(id, callback) {
    let sql = 'SELECT * FROM products WHERE id = ?';
    return conn.query(sql, callback)
  }

  static toSave(dados, callback) {
    let sql = 'INSERT INTO products(title, img) VALUES(?, ?)';
    return conn.query(sql, [dados.titulo, dados.caminho], callback);
  }

  static update(dados, callback) {
    let sql = 'UPDATE products SET title = ?, img = ? WHERE id = ?';
    return conn.query(sql, [dados.titulo, dados.caminho, dados.id], callback);
  }

  static delete(id, callback) {
    let sql = 'DELETE FROM products WHERE id = ?';
    return conn.query(sql, [id], callback)
  }
}