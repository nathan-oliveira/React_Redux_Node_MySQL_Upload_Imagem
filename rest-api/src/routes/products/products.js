'use strict'

const ProductsController = require('../../controllers/client/ProductsController');

module.exports = (app) => {
  app.get('/produtos', (req, res, next) => {
    ProductsController.list(app, req, res, next)
  })

  app.get('/produtos/:id?', (req, res, next) => {
    ProductsController.listById(app, req, res, next)
  })

  app.post('/produtos/?', (req, res, next) => {
    ProductsController.toSave(app, req, res, next)
  })

  app.put('/produtos/', (req, res, next) => {
    ProductsController.update(app, req, res, next)
  })

  app.delete('/produtos/:id?', (req, res, next) => {
    ProductsController.delete(app, req, res, next)
  })
}