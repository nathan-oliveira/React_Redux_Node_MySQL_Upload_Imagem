'use strict'

const IndexController =  require('../controllers/IndexController');

module.exports = (app) => {
  app.get('/', (req, res, next) => {
    IndexController.listar(app, req, res, next)
  })
}