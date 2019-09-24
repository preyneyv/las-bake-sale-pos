const express = require('express');
const controller = require('./controller');

module.exports = app => {
	app.use(express.static(__dirname + '/public'))

  app.get('/products', controller.listProducts);
  app.post('/sale', controller.makeSale);
}