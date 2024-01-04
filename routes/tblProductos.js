const express = require('express');
const tblproducto = express();
const db = require('../Database/conn');

tblproducto.get('', async (req, res) => {
  let sql = 'SELECT * FROM tbl_productos';
  const resultado = await db.query(sql);
  res.json(resultado);
});

tblproducto.post('', async (req, res) => {
  const params =[
    req.body.Nombre_producto,
    req.body.Descripcion_producto,
    req.body.Precio,
    req.body.Categoria_producto
  ];

  let sql = `INSERT INTO tbl_productos (Nombre_producto, Descripcion_producto, Precio, Categoria_producto)
  VALUES ($1, $2, $3, $4)
  returning *;`;
  const resultado = await db.query(sql, params);
  res.json(resultado);
});

tblproducto.put('/:id', async (req, res) => {
  const params =[
    req.body.Nombre_producto,
    req.body.Descripcion_producto,
    req.body.Precio,
    req.body.Categoria_producto,
    req.params.id
  ];

  let sql = `UPDATE tbl_productos
  set Nombre_producto = $1,
      Descripcion_producto = $2,
      Precio = $3,
      Categoria_producto = $4
  where id = $5
  returning *;`;
  const resultado = await db.query(sql, params);
  res.json(resultado);
});

tblproducto.delete('/:id', async (req, res) => {

  let params = [
    req.params.id

  ];

  let sql = `DELETE from tbl_productos
  where id = $1
  returning *;`;
  const resultado = await db.query(sql, params);
  res.json(resultado);
});

module.exports = tblproducto;