const express = require('express');

// const response = require('../network/response');
const Store = require('./redis');

const router = express.Router();

async function list(req, res, next) {
  const datos = await Store.list(req.params.table);

  console.log(`list ${req.params.table}: `, datos);
  // response.success(req, res, datos, 200);
  res.send(datos).status(200);
}

async function get(req, res, next) {
  const datos = await Store.get(req.params.table, req.params.id);
  // response.success(req, res, datos, 200);

  res.send(datos).status(200);
}

async function upsert(req, res, next) {
  const datos = await Store.upsert(req.params.table, req.body);
  console.log('upsert', datos);
  // response.success(req, res, datos, 200);

  res.send(datos).status(200);
}

router.get('/:table', list);
router.get('/:table/:id', get);
router.put('/:table', upsert);

module.exports = router;
