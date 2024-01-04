const express = require('express');
const app = express();
//middleware
app.use(express.json());


const tblproducto = require('./routes/tblProductos');
app.use('/tbl/productos', tblproducto);

app.listen(3000);