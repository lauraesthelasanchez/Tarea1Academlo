const pgp = require('pg-promise')();

const user = 'postgres';
const pass = 'Moncbermu1214';
const host = 'localhost'
const database = 'postgres'

const conectionString = `postgresql://${user}:${pass}@${host}:5432/${database}`;

const db = pgp(conectionString);

db.connect()
    .then ( ()=>{
        console.log("Conexion Exitosa")
    })
    .catch( (err)=> {
        console.log(`Erro de Conexion ${err}`);
    });

module.exports = db;